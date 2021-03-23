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
  can_bac: string;
  can_bacOption: string;
  can_bacOption2: string;
  can_bacOption3: string;
  can_etablissement: string;



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
    header: 'Ajouter', 
    subHeader: 'Veuillez confirmer vos information',
    message:'Nom : '+this.can_nom+
            ',<br> Prénom : '+this.can_prenom+
            ',<br> Mail : '+this.can_mail+
            ',<br> Tel : '+this.can_tel+
            ',<br> Etablissement : '+this.can_etablissement+
            ',<br> Bac : '+this.can_bac+
            ',<br> Option : '+this.can_bacOption+
            ',<br> Option2 : '+this.can_bacOption2+
            ',<br> Option3 : '+this.can_bacOption3+
            ',<br> Formation : '+this.can_form+
            ',<br> Lieu : '+this.can_lieu
            
    ,
    buttons: ['NON','OUI'] 
    }); 
    await alert.present(); 
    const result = await alert.onDidDismiss();  
    console.log(result); 
    } 

    
}
