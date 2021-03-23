import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor( public afAuth: AngularFireAuth,private router: Router) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.router.navigateByUrl('/tabs/accueil');
        console.log('non connecté');
        this.connected = false;
      } else {
        this.router.navigateByUrl('/tabs/enseignant');
        console.log('connecté: ' + auth.uid);
        this.connected = true;
      }
    });
  }
  connected: boolean;
  dataUser = {
    email: '',
    password: ''
 };
  logout() {
    this.afAuth.signOut();
  }

}
