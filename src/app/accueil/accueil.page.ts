import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage
  )  
 {}
  ngOnInit() {
  
  }
  images= "";
  getImagesDatabase(){
    this.afSG.ref('Images/logo.png').getDownloadURL().subscribe(images => {
      this.images = images;
    })
  }
}

