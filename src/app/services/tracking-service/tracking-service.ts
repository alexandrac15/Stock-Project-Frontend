import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Sector} from '../../domain/Sector';


@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
  };
  baseURL = environment.baseUrl;
  constructor(private http: HttpClient) {
  }

  trackCompanyService(userId, companyId):Observable<number>{
    const path=this.baseURL+"trackCompany/"+userId+"/"+companyId;
    console.log("SERVICE: trackCompany")
    return this.http.post<number>(path, this.httpOptions);
  }
}
