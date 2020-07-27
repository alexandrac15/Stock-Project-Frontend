import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SocialLoginModule, AuthServiceConfig, LoginOpt} from 'angularx-social-login';

import {HttpClientModule} from '@angular/common/http';
import { GraphComponent } from './Components/graph/graph.component';
import {LineChartModule, NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';






const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig




@NgModule({
  declarations: [
    AppComponent,

    GraphComponent,


  ],

  imports: [
    BrowserModule,

    HttpClientModule,
    LineChartModule,
    NoopAnimationsModule,
    NgxChartsModule,
    BrowserAnimationsModule

  ],
  providers: [  {
    provide: AuthServiceConfig,

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
