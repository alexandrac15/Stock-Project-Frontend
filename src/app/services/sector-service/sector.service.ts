import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../../domain/Company';
import {Sector} from '../../domain/Sector';
import {environment} from '../../../environments/environment';
import {Graph} from '../../domain/Graph';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
  };
  baseURL = environment.baseUrl;
  constructor(private http: HttpClient) {
  }


  getSectors():Observable<Sector[]>{
    const path=this.baseURL+"sectors";
    console.log("SERVICE: getSectors")
    return this.http.get<Sector[]>(path, this.httpOptions);
  }


}
