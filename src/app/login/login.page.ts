import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public toastController: ToastController,
    public afDB: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/tabs/enseignant');
        console.log('connecté: ' + auth.uid);
        this.connected = true;
      }
    });
  }

  ngOnInit() {
  }
  connected: boolean;
  dataUser = {
    email: '',
    password: ''
 };

 //fonction permettant de se connecter
 login() {
  this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
   this.dataUser = {
     email: '',
     password: ''
   };
}
//fonction permettant de se déconnecter
logout() {
  this.afAuth.signOut();
}
}
