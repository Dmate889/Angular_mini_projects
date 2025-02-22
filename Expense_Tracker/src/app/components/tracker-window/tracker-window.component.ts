import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker-window',
  standalone: false,
  templateUrl: './tracker-window.component.html',
  styleUrl: './tracker-window.component.css'
})
export class TrackerWindowComponent implements OnInit {

   moneyContainer: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {


  }

   setIncome(e: any){

    e.preventDefault();

    const apiUrl = 'http://localhost:3000/setincome';


    const moneyInput = <HTMLInputElement>document.getElementById("moneyInput")
    const body = moneyInput.value;
    

    this.http.post(apiUrl, body);
    
  }
  

}
