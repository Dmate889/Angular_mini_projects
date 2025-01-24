import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-component',
  standalone: false,
  
  templateUrl: './home-page-component.component.html',
  styleUrl: './home-page-component.component.css'
})
export class HomePageComponentComponent implements OnInit
{
  constructor(private router: Router){}
  
  
  ngOnInit(): void {
    
  }

  navigatetoMoreInfo(){
     this.router.navigate(['/moreInfo']);
  }

}
