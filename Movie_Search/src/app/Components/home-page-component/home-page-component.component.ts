import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFlowService } from '../../Services/data-flow.service';

@Component({
  selector: 'app-home-page-component',
  standalone: false,
  
  templateUrl: './home-page-component.component.html',
  styleUrl: './home-page-component.component.css'
})
export class HomePageComponentComponent implements OnInit
{

  constructor(private router: Router, private http: HttpClient, private dataFlow: DataFlowService){}
  
  
  ngOnInit(): void {

  }

  navigatetoMoreInfo(){
     this.router.navigate(['/moreInfo']);
  }

  getInputData():  void{

    const inputField = <HTMLInputElement>document.getElementById('inputField');
    const inputValue = inputField?.value;

    if(inputValue === '') {
      alert('This field can not be empty');
      return;
    }

    this.http.get(`http://www.omdbapi.com/?apikey=ccf2c664&s=${inputValue}`).subscribe({
      next: (response: any) => {
        if(response && response.Response === 'True'){
          this.dataFlow.setData(response);
          this.router.navigate(['/moreInfo']);
        }
        else alert('Movie could not be found');
      },
      error: (err) => {
        console.error('There was an error during the call of the API' +  err);
        alert('There was an error during the call of the API!');
      }
    });
  }

}
