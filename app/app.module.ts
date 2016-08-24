import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from "@angular/http";
import {RouterModule} from "@angular/router";

import {ExceptionHandler} from "@angular/core";
import { LocationStrategy, HashLocationStrategy} from '@angular/common';


import { AppComponent }  from './app.component';

import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";

import {ByYearPipe} from "./product/product.pipes";

import {AppExceptionHandler} from "./error/error.exception";

import {homeRouting} from "./home/home.routing";
import {aboutRouting}from "./about/about.routing";
import {contactRouting} from "./contact/contact.routing";
import {productRouting} from "./product/product.routing";
import {errorRouting} from "./error/error.routing";

import {apiEndPoint} from "./app.config";


@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule,
    HttpModule,

    homeRouting,
    aboutRouting,
    contactRouting,
    productRouting,
    errorRouting
    
    
    ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,

    ByYearPipe
    ],

    providers: [
      {
        'provide' : 'apiEndPoint', useValue: apiEndPoint
      },

      {
        'provide': ExceptionHandler, useClass: AppExceptionHandler
      }
      
      //,{ 'provide': LocationStrategy, useClass: HashLocationStrategy },

    ],
  bootstrap: [ 
    AppComponent
    ]
})
export class AppModule { }
