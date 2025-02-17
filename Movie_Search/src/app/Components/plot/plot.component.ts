import { Component, OnInit } from '@angular/core';
import { DataFlowService } from '../../Services/data-flow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plot',
  standalone: false,
  
  templateUrl: './plot.component.html',
  styleUrl: './plot.component.css'
})
export class PlotComponent implements OnInit{

  movie: any

  constructor(private dataFlow: DataFlowService, private router: Router){}

  ngOnInit(){
    this.movie = this.dataFlow.getData();
  }

  navigateBack(){
    this.router.navigate(['/homePage'])
  }
}
