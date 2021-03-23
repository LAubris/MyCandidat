import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.page.html',
  styleUrls: ['./enseignant.page.scss'],
})
export class EnseignantPage implements OnInit {

  constructor(public firestore: AngularFirestore) {
    this.candidats = firestore.collection('candidats').valueChanges();
  }

  ngOnInit() {
  }
  candidats: Observable<any[]>;
  can_nom: string;
  can_prenom: string;
  can_mail: string;
  can_tel: string;

}