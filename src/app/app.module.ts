import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat'; // pour se connecter à Firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; // pour manipuler la base de données Firebase
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // pour accéder aux fonction de stockage et de récupération des fichiers
export const firebaseConfig = {
  apiKey: 'AIzaSyCP65Ill-Qvr_2JMb_r9CfuoinmG5yQBok',
  authDomain: 'ionic-project-2000.firebaseapp.com',
  databaseURL: 'https://ionic-project-2000-default-rtdb.firebaseio.com',
  projectId: 'ionic-project-2000',
  storageBucket: 'ionic-project-2000.appspot.com',
  messagingSenderId: '260096691615',
  appId: '1:260096691615:web:5a981d36397049f5e101aa',
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
