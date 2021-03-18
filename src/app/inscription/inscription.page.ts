import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(
    public afDB: AngularFireDatabase,
    public firestore: AngularFirestore
    )
    {
      this.candidats = firestore.collection('candidat').valueChanges();

     }
  ngOnInit() {
  }

  candidats: Observable<any[]>;
  can_nom: string;
  can_prenom: string;
  can_mail: string;
  can_tel: string;



  addFirestore() {
    this.firestore.collection('candidats').add({
      can_nom: this.can_nom,
      can_prenom: this.can_prenom,
      can_mail: this.can_mail,
      can_tel: this.can_tel,
      });
  }
}
