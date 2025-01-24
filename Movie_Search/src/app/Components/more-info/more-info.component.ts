import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-info',
  standalone: false,
  
  templateUrl: './more-info.component.html',
  styleUrl: './more-info.component.css'
})
export class MoreInfoComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
    

  }

  backToHomePage(){
    this.router.navigate(['/homePage']);
  }

}
