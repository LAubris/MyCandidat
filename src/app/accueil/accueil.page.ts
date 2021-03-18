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
  ) {
    this.getImagesDatabase();
  }

  ngOnInit() {
  }  
  images = [];
  getImagesDatabase() {
    //probleme ici
    this.afDB.list('Images').snapshotChanges(['child_added']).subscribe(images => {
      images.forEach(image => {
        this.getImagesStorage(image);
      });
    });
  }
  getImagesStorage(image: any) {
    const imgRef = image.payload.exportVal().ref;
    this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
      console.log(imgUrl);
      this.images.push({
        name: image.payload.exportVal().name,
        url: imgUrl
      });
    });
  }
}

