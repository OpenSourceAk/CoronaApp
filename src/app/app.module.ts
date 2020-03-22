import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabularComponent } from './components/tabular/tabular.component';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsServiceService } from 'src/app/services/statistics-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TabularComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StatisticsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
