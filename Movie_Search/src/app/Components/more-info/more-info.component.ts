import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFlowService } from '../../Services/data-flow.service';

@Component({
  selector: 'app-more-info',
  standalone: false,
  
  templateUrl: './more-info.component.html',
  styleUrl: './more-info.component.css'
})
export class MoreInfoComponent implements OnInit {
  metaData : {title: string, releaseDate: string, type: string, poster: string} [] = [];

  constructor(private router: Router, private dataFlow: DataFlowService){}

  ngOnInit(): void {
    const response = this.dataFlow.getData();
    
    if(response && response.Search){
      this.metaData = response.Search.map((item: any) => ({
        title : item.Title,
        releasedDate: item.Year,
        type: item.Type,
        poster: item.Poster
      }));
    }
    console.log(JSON.stringify(response));

    this.metaData.forEach((item) => {
      console.log(item);
    });
  }


  backToHomePage(){
    this.router.navigate(['/homePage']);
  }

}
