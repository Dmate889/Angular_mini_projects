import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataFlowService } from '../../Services/data-flow.service';

@Component({
  selector: 'app-home-page-component',
  standalone: false,

  templateUrl: './home-page-component.component.html',
  styleUrl: './home-page-component.component.css',
})
export class HomePageComponentComponent implements OnInit {
  isActive = true;
  isButtonActive = true;
  metaData: {title: string, year: Date, poster: string} [] = [];

  constructor(private http: HttpClient, private dataFlow: DataFlowService) {}

  ngOnInit(): void {}

  navigateBack() {
    this.isActive = true;
  }

  addYearButton(event: any){
    event.preventDefault();
    this.isButtonActive = !this.isButtonActive;
  }

  getInputData(): void {
    const inputFieldTitle = <HTMLInputElement>document.getElementById('inputFieldTitle');
    const inputFieldYear = <HTMLInputElement>document.getElementById('inputFieldYear');
    const inputValueTitle = inputFieldTitle?.value;
    const inputValueYear = inputFieldYear?.value;
    let apiUrl = `http://www.omdbapi.com/?apikey=ccf2c664&s=${inputValueTitle}`;
    if (inputValueYear) {
      apiUrl += `&y=${inputValueYear}`;
    }
  

    if (inputValueTitle === '') {
      alert('This field can not be empty');
      return;
    } else {
      this.isActive = !this.isActive;
      this.http
        .get(apiUrl)
        .subscribe({
          next: (response: any) => {
            if (response && response.Response === 'True') {
              this.metaData = response.Search.map((movie: any) => ({
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster  
              }));
            }
           else alert('Movie could not be found');
          },
          error: (err) => {
            console.error(
              'There was an error during the call of the API' + err
            );
            alert('There was an error during the call of the API!');
          },
        });
    }
  }
}
