import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(
    public toastController: ToastController,
    public afDB: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
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
 login() {
  this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
   this.dataUser = {
     email: '',
     password: ''
   };
}
logout() {
  this.afAuth.signOut();
}
}
