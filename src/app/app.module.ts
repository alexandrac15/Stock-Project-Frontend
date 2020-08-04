import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SocialLoginModule, AuthServiceConfig, LoginOpt, GoogleLoginProvider} from 'angularx-social-login';
import {  SocialAuthServiceConfig } from 'angularx-social-login';
import {HttpClientModule} from '@angular/common/http';
import { GraphComponent } from './Components/graph/graph.component';
import {LineChartModule, NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { TestloginComponent } from './Components/testlogin/testlogin.component';




const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

let clientId = ''


@NgModule({
  declarations: [
    AppComponent,

    GraphComponent,

    TestloginComponent,


  ],

  imports: [
    BrowserModule,

    HttpClientModule,
    LineChartModule,
    NoopAnimationsModule,
    NgxChartsModule,

    BrowserAnimationsModule

  ],
  providers: [ {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            clientId
          ),
        }
      ]
    } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
