import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  listeMails;

  constructor(
    public afDB: AngularFireDatabase,
    public firestore: AngularFirestore,
    public alertCtrl: AlertController,
    public router: Router,
    )
    {
      this.candidats = firestore.collection('candidats');
      this.inscriptions = firestore.collection('inscriptions').valueChanges();
      this.inscriptionsBacs = firestore.collection('inscriptionsBacs').valueChanges();

      this.etablissements = firestore.collection('etablissements').valueChanges();
      this.bacs = firestore.collection('bacs').valueChanges();
      this.bacOptions = firestore.collection('bacOptions').valueChanges();

      this.listeMails = [];
     }
  ngOnInit() {
    this.candidats.ref.onSnapshot(candidat => {
      candidat.forEach(element => {
              this.listeMails.push({mail:element.data().can_mail,});
            })
          });
  }
  public candidats;
  public inscriptions;
  inscriptionsBacs: Observable<any[]>;

  etablissements: Observable<any[]>;
  bacs: Observable<any[]>;
  bacOptions: Observable<any[]>;
  
  
  can_id: number;
  can_nom: string;
  can_prenom: string;
  can_mail: string;
  can_tel: string;

  


  ins_date: String = new Date().getUTCDate() +"/"+(new Date().getUTCMonth()+1)+"/"+new Date().getFullYear();
  ins_form: string;
  ins_lieu: string;


  bac_etablissement: string;
  bac_libelle: string;
  bac_Option1: string;
  bac_Option2: string;
  bac_Option3: string;





  Verification(){
    var isExist = false;
    for (let i = 0; i < this.listeMails.length; i++) {
      if (this.listeMails[i].mail == this.can_mail) {
        isExist = true
        break
      }
      else{
      
      } 
    }
    if (isExist == true) {
      this.addFirestorePasNew()
    }
    else{
      this.addFirestoreNew()
    }
  }



  addFirestoreNew() {
    this.can_id = new Date().getTime() + Math.floor(Math.random() * 9);
    var id_doc_can = this.can_id.toString();
    this.firestore.collection('candidats').doc(id_doc_can).set({
      can_id: this.can_id,
      can_nom: this.can_nom,
      can_prenom: this.can_prenom,
      can_mail: this.can_mail,
      can_tel: this.can_tel,
      });
    this.firestore.collection('inscriptions').add({
      can_id: this.can_id,
      ins_date: this.ins_date,
      ins_form: this.ins_form,
      ins_lieu: this.ins_lieu,
      });
    this.firestore.collection('inscriptionsBacs').add({
      can_id: this.can_id,
      bac_etablissement: this.bac_etablissement,
      bac_libelle: this.bac_libelle,
      bac_Option1: this.bac_Option1,
      bac_Option2: this.bac_Option2,
      bac_Option3: this.bac_Option3,
      });
  
  }

  addFirestorePasNew() {
    this.can_id = new Date().getTime() + Math.floor(Math.random() * 50);
    var id_doc_can = this.can_id.toString();
    
    this.firestore.collection('inscriptions').add({
      can_id: this.can_id,
      ins_date: this.ins_date,
      ins_form: this.ins_form,
      ins_lieu: this.ins_lieu,
      });
    this.firestore.collection('inscriptionsBacs').add({
      can_id: this.can_id,
      bac_etablissement: this.bac_etablissement,
      bac_libelle: this.bac_libelle,
      bac_Option1: this.bac_Option1,
      bac_Option2: this.bac_Option2,
      bac_Option3: this.bac_Option3,
      });
  
  }
 
  async Validation() { 
    const alert = await this.alertCtrl.create({ 
    header: 'Ajouter', 
    subHeader: 'Veuillez confirmer vos information',
    message:'Nom : '+this.can_nom+
            '<br> Prénom : '+this.can_prenom+
            '<br> Mail : '+this.can_mail+
            '<br> Tel : '+this.can_tel+
            '<br> Etablissement : '+this.bac_etablissement+
            '<br> Bac : '+this.bac_libelle+
            '<br> Option 1 : '+this.bac_Option1+
            '<br> Option 2 : '+this.bac_Option2+
            '<br> Option 3 : '+this.bac_Option3+
            '<br> Formation : '+this.ins_form+
            '<br> Lieu : '+this.ins_lieu
            
    ,
    buttons: [
      {
        text: 'Annuler',
        handler: () => {
         
        }
      },
      {
        text: 'Confirmer',
        handler: () => {
          this.Verification();
          this.router.navigate(['tabs/accueil']);
        }
      },
    ]
  }).then(res => {
    res.present();
  });


}

    
}

