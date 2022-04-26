import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {

  constructor(
    private router: Router
    ) { 

  }
  nexte() {
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
