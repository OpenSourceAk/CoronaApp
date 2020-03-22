import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Statistics } from 'src/app/models/Statistics';
import{DayItem } from 'src/app/models/Day-Item'
@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  @Input()
  public statistics :Statistics
  public barChartData: ChartDataSets[] = [
    { data: [0], label: 'الاصابات' },
   { data: [0], label: 'الوفيات' },
   { data: [0], label: 'الشفاءات' }
  ];

  constructor() { 
   this.statistics = new Statistics() ; 
  }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {

    // changes.prop contains the old and the new value...
    if ( this.statistics != null)
    {
      this.barChartData = [{data:this.statistics.confirmed.map(x=> x.count),label: 'الاصابات'},
      {data:this.statistics.deaths.map(x=> x.count),label: 'الوفيات'},
      {data:this.statistics.healed.map(x=> x.count),label: 'الشفاءات'}];
      this.barChartLabels = this.statistics.confirmed.map(x  => x.date.toString ().substring(0,10) )
    }
    
  }

}
