import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Graph} from '../../domain/Graph';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }
  getHistoricalGraph(days: number): Observable<Graph> {
    console.log('Este in service - getGraph cu parametru '+ days);

    const url = 'http://localhost:8080/graph/'+days;
    return this.http.get<Graph>(url, this.httpOptions);
  }
}
