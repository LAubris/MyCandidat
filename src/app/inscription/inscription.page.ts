import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';
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
    public firestore: AngularFirestore,
    public alertCtrl: AlertController,
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
  can_form: string;
  can_lieu: string;
  can_date: String = new Date().toISOString();



  addFirestore() {
    this.firestore.collection('candidats').add({
      can_nom: this.can_nom,
      can_prenom: this.can_prenom,
      can_mail: this.can_mail,
      can_tel: this.can_tel,
      can_form: this.can_form,
      can_lieu: this.can_lieu,
      can_date: this.can_date,
      });
  }
 
  async Validation() { 
    const alert = await this.alertCtrl.create({ 
    header: 'Confirmation', 
    subHeader: 'Veuillez confirmer vos information',
    message:'Nom : '+this.can_nom+
            ', Prénom : '+this.can_prenom+
            ', Mail : '+this.can_mail+
            ', Tel : '+this.can_tel
    ,
    buttons: ['NON','OUI'] 
    }); 
    await alert.present(); 
    const result = await alert.onDidDismiss();  
    console.log(result); 
  
    
    } 
}
