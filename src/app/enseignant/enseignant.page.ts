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

  constructor(public firestore: AngularFirestore, public afAuth: AngularFireAuth,) {
    
    this.candidats = firestore.collection('candidats').valueChanges();
    this.inscriptions = firestore.collection('inscriptions').valueChanges();

    
  }

filterTerm: string;

  ngOnInit() {
  }
  candidats: Observable<any[]>;
  can_nom: string;
  can_prenom: string;
  can_mail: string;
  can_tel: string;
  candidat =[];

inscriptions: Observable<any[]>;
ins_date: String =new Date().getUTCDate() +"/"+(new Date().getUTCMonth()+1)+"/"+new Date().getFullYear();

  logout() {
    this.afAuth.signOut();
  }

  test;
recherche(){
  this.candidat = [];
  var that = this;
  that.test = that.firestore.collection('candidats').valueChanges();
  that.test.ref.orderBy('can_nom');
}



}
