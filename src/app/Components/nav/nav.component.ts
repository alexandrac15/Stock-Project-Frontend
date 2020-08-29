import { Component, OnInit } from '@angular/core';
import {TestloginComponent} from '../testlogin/testlogin.component';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {CompanyComponent} from '../company/company.component';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appHeaders = null;

  isLogged : boolean = false;
  photoUrl : string;
  username : string;
  useremail : string;

  constructor(private authService: SocialAuthService, private companyComponent : CompanyComponent, private router :Router, private http: HttpClient) { }



  ngOnInit(): void {
    this.isLogged = localStorage.getItem('userulnostru') != null;
    if(this.isLogged)
    {
      this.photoUrl = localStorage.getItem('userpicture')
      this.username = localStorage.getItem('username')
      this.useremail = localStorage.getItem('useremail')
    }
  }

  login(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log("User tried to log in. Status: " + ((user != null) ? "Success" : "Error" )  );
      // Daca userul exista, inseamna ca autentificarea e legita si putem arata consola de User
      if(user)
      {
        localStorage.setItem('userulnostru',user.id);
        localStorage.setItem('userpicture',user.photoUrl);
        localStorage.setItem('username',user.name);
        localStorage.setItem('useremail',user.email);
        localStorage.setItem('usertoken', user.idToken);

        this.backendLogin(user.idToken).subscribe(resp => {
            // Logam datele primite
            console.log(resp);

            // Se creeaza headerele finale care vor fi folosite pentru API call uri.
            // Folosind resp.headers.get("Authorization") scoatem din headerele de raspuns tokenul de backend
            // de autorizare si il lipim la TOATE requesturile catre backend
            this.appHeaders = new HttpHeaders({
              'Authorization' :  resp.headers.get("Authorization")})
          }
        );

        this.router.navigate(['sectors']);
        this.ngOnInit();

      }
    });
  }

  backendLogin(idToken):Observable<HttpResponse<Object>>{

    // Se creeaza un header temporar care va contine tokenul primit de la Google
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'X-ID-TOKEN': `${idToken}`
    });

    // Url-ul de login, punctul in care dam tokenul de Google pe tokenul de backend
    const url = `http://localhost:8080/login`;

    // Nu avem nevoie de date in body
    const body = { };

    // Facem un post catre localhost:8080/login. Trimitem tokenul de la google care in backend va fi verificat, si prin acel
    // observe: "response" se spune angular-ului sa dea ca raspuns si headerele primite de la backend, nu numai body-ul
    return this.http.post<HttpResponse<Object>>(url, body, { headers: headers, observe: "response" });
  }

  logout(){

    this.photoUrl = null
    this.username = null
    this.useremail = null
    this.isLogged = false

    localStorage.clear();
    this.router.navigate(['sectors']);
    this.ngOnInit();
  }



}
