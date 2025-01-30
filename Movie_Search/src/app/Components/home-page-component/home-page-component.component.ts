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

  constructor(private http: HttpClient, private dataFlow: DataFlowService) {}

  ngOnInit(): void {}

  navigateBack() {
    this.isActive = true;
  }

  getInputData(): void {
    const inputField = <HTMLInputElement>document.getElementById('inputFieldTitle');
    const inputValue = inputField?.value;

    if (inputValue === '') {
      alert('This field can not be empty');
      return;
    } else {
      this.isActive = !this.isActive;
      this.http
        .get(`http://www.omdbapi.com/?apikey=ccf2c664&s=${inputValue}`)
        .subscribe({
          next: (response: any) => {
            if (response && response.Response === 'True') {
              this.dataFlow.setData(response);
            } else alert('Movie could not be found');
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
