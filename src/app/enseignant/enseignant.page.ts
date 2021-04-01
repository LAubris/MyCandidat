import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.page.html',
  styleUrls: ['./enseignant.page.scss'],
  
})
export class EnseignantPage implements OnInit {

  listeCandidats;
  listeInscriptions;

  constructor(public firestore: AngularFirestore, public afAuth: AngularFireAuth,) {
    
    this.candidats = firestore.collection('candidats');
    this.inscriptions = firestore.collection('inscriptions');

    this.listeCandidats = [];


    
  }

  ngOnInit() {
    this.candidats.ref.onSnapshot(candidat => {
      candidat.forEach(element => {
        this.inscriptions.ref.onSnapshot(inscription => {
          inscription.forEach(element2 => {
            if(element.data().can_id== element2.data().can_id ){
              this.listeCandidats.push({id:element.data().can_id, nom:element.data().can_nom, prenom:element.data().can_prenom, tel:element.data().can_tel, mail:element.data().can_mail, date:element2.data().ins_date,ins_form:element2.data().ins_form});
            }
          });
        });
      });
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  filterTerm: string;

  public candidats;
  public inscriptions;
  can_nom: string;
  can_prenom: string;
  can_mail: string;
  can_tel: string;
  candidat =[];

  
ins_date: String =new Date().getUTCDate() +"/"+(new Date().getUTCMonth()+1)+"/"+new Date().getFullYear();

  logout() {
    this.afAuth.signOut();
  }




}


