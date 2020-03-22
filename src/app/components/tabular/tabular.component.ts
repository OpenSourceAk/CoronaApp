import { Component, OnInit } from '@angular/core';
import { StatisticsServiceService } from 'src/app/services/statistics-service.service';
import { Statistics } from 'src/app/models/statistics';

@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.scss']
})

export class TabularComponent implements OnInit {

  constructor(private statiscticsService:StatisticsServiceService) {
this.statistics = new Statistics() ; 
 this.test = 2 ;

   }
 
   statistics : Statistics; 
test:number ; 
  ngOnInit(): void {
  let  test = 1 ;
this.statiscticsService.getStatistics().subscribe( x =>{ 
  console.debug(x);
  this.statistics = x;
  
} ) ;

  }

}
