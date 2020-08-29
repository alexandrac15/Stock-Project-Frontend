import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Graph} from '../../domain/Graph';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Company} from '../../domain/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
  };
  baseURL = environment.baseUrl;
  constructor(private http: HttpClient) { }



   getCompany(idCompany: number):Observable<Company>{
     const path=this.baseURL+"companies/"+idCompany
     console.log("SERVICE: getCompany")
     return this.http.get<Company>(path, this.httpOptions);
   }
   getCompaniesBySector(idSector: number):Observable<Company[]>{
     const path=this.baseURL+"sector/companies/"+idSector;
     console.log("SERVICE: getCompaniesBySector")
     return this.http.get<Company[]>(path, this.httpOptions);
   }

}
