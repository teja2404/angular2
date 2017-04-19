import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,Response, Headers, RequestOptions,Http } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent} from './login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { RouterModule }   from '@angular/router';
import {InputTextModule} from 'primeng/primeng';
import { LoginService} from './login/login.service';
import {GrowlModule} from 'primeng/primeng';

import {AccordionModule,ButtonModule,SlideMenuModule } from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';            //api

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    SlideMenuModule,
    InputTextModule,
    GrowlModule,
     RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
       {
        path: '',
        component: LoginComponent
      }
    ])
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
