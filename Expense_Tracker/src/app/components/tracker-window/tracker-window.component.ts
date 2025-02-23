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
   isActive: boolean = false;
   op: string = "";

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    const apiUrl = 'http://localhost:3000/getincome';

    this.http.get<any>(apiUrl).subscribe(
      (response) => {
        if (response && response.rows && response.rows.length > 0) {
          this.moneyContainer = response.rows[0].income;
        } else {
          console.warn("No data in response");
        }
      },
      (error) => {
        console.error(`Error occurred when calling endpoint: ${apiUrl}`, error);
      }
    );
  }


   setIncome(e: any, op: string){

    e.preventDefault();
    this.isActive = true;

    const apiUrl = `http://localhost:3000/${op}`

    let moneyInput = <HTMLInputElement>document.getElementById("moneyInput")
    if(moneyInput){
      const incomeValue = moneyInput.value.trim();
      const body = {income: Number(incomeValue)};
      this.http.post(apiUrl, body).subscribe(
        (response) => console.log("Successful POST request"),
        (error) => console.log("Unable to send POST request")
      )
    } 
  }

  add() {
    this.isActive = false;
    this.op = "setincomePlus"
    this.setIncome(new Event('click'), this.op);
    window.location.reload();
  }
  
  sub() {
    this.isActive = false;
    this.op = "setincomeMinus"
    this.setIncome(new Event('click'), this.op);
    window.location.reload();
  }
}
