import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Graph} from '../../domain/Graph';
import {environment} from '../../../environments/environment';

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
  baseURL = environment.baseUrl;
  constructor(private http: HttpClient) {
  }

  getChart(idCompany: number, days: number):Observable<Graph[]>{
    // const path=this.baseURL+"graph/"+idCompany+"/"+days;
    const path=this.baseURL+"graph/prediction/"+idCompany+"/"+days;
    console.log("SERVICE: getHistoricGraph ")
    return this.http.get<Graph[]>(path, this.httpOptions);
  }
  getJustHistoricGraph(idCompany: number, days: number):Observable<Graph>{
    // const path=this.baseURL+"graph/"+idCompany+"/"+days;
    const path=this.baseURL+"graph/"+idCompany+"/"+days;
    console.log("SERVICE: getJustHistoricGraph ")
    return this.http.get<Graph>(path, this.httpOptions);
  }

}



