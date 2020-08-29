import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider} from 'angularx-social-login';

import {HttpClientModule} from '@angular/common/http';
import { GraphComponent } from './Components/graph/graph.component';
import {LineChartModule, NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { TestloginComponent } from './Components/testlogin/testlogin.component';
import { CompanyComponent } from './Components/company/company.component';
import { MatCardModule } from '@angular/material/card';
import {RouterModule, Routes} from '@angular/router';
import { SectorPanelComponent } from './Components/sector-panel/sector-panel.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SectorComponent } from './Components/sector/sector.component';
import { NavComponent } from './Components/nav/nav.component';
import {MatButtonModule} from '@angular/material/button';
import {TrackingService} from './services/tracking-service/tracking-service';




// let clientId = '395904016915-63lfd66bcv9urj4olbg0riu94s8o90uo.apps.googleusercontent.com'
let clientId = '395904016915-pun4nvj39b0fqevf1jp3bmlktt4m2ah4.apps.googleusercontent.com'
const APP_ROUTES: Routes = [
  {path: 'company/:id', component: CompanyComponent},
  {path: 'sector/:id', component: SectorComponent},
  {path: 'sectors', component: SectorPanelComponent}
]


@NgModule({
  declarations: [
    AppComponent,

    GraphComponent,

    TestloginComponent,

    CompanyComponent,

    SectorPanelComponent,

    SectorComponent,

    NavComponent,



  ],

  imports: [
    BrowserModule,

    HttpClientModule,
    LineChartModule,
    NoopAnimationsModule,
    NgxChartsModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(APP_ROUTES),
    MatGridListModule,
    MatButtonModule

  ],

  exports: [TestloginComponent, NavComponent],
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
  }, CompanyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
