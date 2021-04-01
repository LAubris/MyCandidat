import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  constructor(
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage
  ) {
    this.getImagesDatabase();
  }

  ngOnInit() {
  }  
  images = "";
  getImagesDatabase() {
    this.afSG.ref('Images/logo.png').getDownloadURL().subscribe(images => {
        console.log('Ref de l\'image: ' + images);
        this.images = images;
    });
   
  }
  

}

