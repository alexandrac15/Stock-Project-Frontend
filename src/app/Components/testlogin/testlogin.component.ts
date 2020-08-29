import { Component, OnInit } from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {User} from '../../domain/User';

@Component({
  selector: 'app-testlogin',
  templateUrl: './testlogin.component.html',
  styleUrls: ['./testlogin.component.css']
})
export class TestloginComponent implements OnInit {
  user: SocialUser;
  loggedIn = false;
  data: User;
  appHeaders = null;
  constructor(private authService: SocialAuthService, private http: HttpClient) { }


  functieSimpla(): void {
    console.log("Heeeey")
  }

  ngOnInit() {
  }
  signInWithGoogle(): void {

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);


    this.authService.authState.subscribe((user) => {
      console.log("User tried to log in. Status: " + ((user != null) ? "Success" : "Error" )  );
      // Daca userul exista, inseamna ca autentificarea e legita si putem arata consola de User
      this.loggedIn = (user != null);
      if(user)
      {
        // Se salveaza local datele despre user
        //this.user = user;

        // In punctul acesta frontendul este autentificata cu serverul de google,
        // urmeaza ssa ne autentificam si cu backendul
        //this.backendLogin();
      }
      return user;
    });
  }

  backendLogin(){

    // Se creeaza un header temporar care va contine tokenul primit de la Google
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'X-ID-TOKEN': `${this.user.idToken}`
    });

    // Url-ul de login, punctul in care dam tokenul de Google pe tokenul de backend
    const url     = `http://localhost:8080/login`;

    // Nu avem nevoie de date in body
    const body    = { };

    // Facem un post catre localhost:8080/login. Trimitem tokenul de la google care in backend va fi verificat, si prin acel
    // observe: "response" se spune angular-ului sa dea ca raspuns si headerele primite de la backend, nu numai body-ul
    this.http.post<HttpResponse<Object>>(url, body, { headers: headers, observe: "response" }).subscribe(resp => {
        // Logam datele primite
        console.log(resp);

        // Se creeaza headerele finale care vor fi folosite pentru API call uri.
        // Folosind resp.headers.get("Authorization") scoatem din headerele de raspuns tokenul de backend
        // de autorizare si il lipim la TOATE requesturile catre backend
        this.appHeaders = new HttpHeaders({
          'Authorization' :  resp.headers.get("Authorization")})
      }
    );
  }

  callBackend() {
    this.http.get<User>('http://localhost:8080/users', {headers : this.appHeaders}).subscribe(data => {
      this.data = data;
    })
  }


}
