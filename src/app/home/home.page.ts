import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {
  images =[];

  constructor(
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage,
    private mdlCtrl : ModalController

  ) {
    this.getImagesDatabase();
    

  }
  getImagesDatabase() {
    // pour récupérer les informations des images
    this.afDB.list('Images/').snapshotChanges(['child_added']).subscribe(images => {
      console.log(images);
      images.forEach(image => {
        console.log('Image: ' + image.payload.exportVal().name);
        this.getImagesStorage(image);
      });
    });
  }
  
  getImagesStorage( image:any) {
    // pour récupérer l'URL des images
    const imageRef = image.payload.exportVal().ref;
    this.afSG.ref(imageRef).getDownloadURL().subscribe(imgUrl => {
      console.log(imgUrl);
      this.images.push({
        name:image.payload.exportVal().name,
        url :imgUrl,
        id : image.payload.exportVal().id,
        description : image.payload.exportVal().description ,
        price : image.payload.exportVal().price
      })
    });
  }

  async showMore(image :any){
    // Show details
    const popup = await this.mdlCtrl.create({
      component : DetailsPage ,
      componentProps : {Image : image},
      breakpoints : [0,0.5,0.9],
      initialBreakpoint : 0.5
    });
    popup.present();
    console.log(image);

  }



}
