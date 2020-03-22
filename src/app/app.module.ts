import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabularComponent } from './components/tabular/tabular.component';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsServiceService } from 'src/app/services/statistics-service.service';
import { ChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './components/my-bar-chart/my-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TabularComponent,
    MyBarChartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [StatisticsServiceService],
  bootstrap: [TabularComponent]
})
export class AppModule { }
