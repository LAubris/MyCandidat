import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ChartsModule } from 'ng2-charts';
//constante permettant la connexion à la bdd et l'accès à differente fonctionnalite 
export const firebaseConfig = {
  apiKey: "AIzaSyD6akPBVCWq7MYKCMW47MpS9IYAbdL7Xgo",
  authDomain: "mycandidat-a2e10.firebaseapp.com",
  databaseURL: "https://mycandidat-a2e10-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mycandidat-a2e10",
  storageBucket: "mycandidat-a2e10.appspot.com",
  messagingSenderId: "960342895050",
  appId: "1:960342895050:web:ac15bbe2317c7210b70733",
  measurementId: "G-FEMRKMNE53"
};



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ChartsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
