import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  @Input() Image : any
  constructor(private route: Router
    ) {
    
     }
     nextpage() {
      this.route.navigate(['/formation']);
    }
    

  ngOnInit() {
   
  }
  
 
   
 
   
}
