import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistics } from 'src/app/models/Statistics';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatisticsServiceService {

  constructor(private httpClient :HttpClient) { }

  public getStatistics () :Observable<Statistics>
  {
    return this.httpClient.get<Statistics> ("http://coronainiraqi.azurewebsites.net/api/statistics") 
  }
}
