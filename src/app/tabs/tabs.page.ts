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
      // si je suis ne suis pas authentifie je suis rediregai vers l'accueil
      if (!auth) {
        this.router.navigateByUrl('/tabs/accueil');
        console.log('non connecté');
        this.connected = false;
      } else {
        // si je suis connecter je suis diriger vers la page enseignant
        this.router.navigateByUrl('/tabs/enseignant');
        console.log('connecté: ' + auth.uid);
        this.connected = true;
      }
    });
  }
  // declaration de l'objet connected en tant que boolean
  connected: boolean;
  dataUser = {
    email: '',
    password: ''
 };
  logout() {
    this.afAuth.signOut();
  }

}
