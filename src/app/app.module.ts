import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AmexioWidgetModule} from 'amexio-ng-extensions'; // Import Amexio library
//Dashboard,Charts & Maps are available as seperate module (not in AmexioWidgetModule)
import {AmexioChartsModule,AmexioDashBoardModule,AmexioEnterpriseModule,AmexioMapModule} from 'amexio-ng-extensions';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AmexioWidgetModule, FormsModule, AmexioChartsModule, AmexioDashBoardModule,AmexioEnterpriseModule,AmexioMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
