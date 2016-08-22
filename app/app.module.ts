import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from "@angular/http";
import {RouterModule} from "@angular/router";

import { AppComponent }  from './app.component';

import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";

import {ByYearPipe} from "./product/product.pipes";

import {homeRouting} from "./home/home.routing";
import {aboutRouting}from "./about/about.routing";
import {contactRouting} from "./contact/contact.routing";

import {productRouting} from "./product/product.routing";



@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule,
    HttpModule,

    homeRouting,
    aboutRouting,
    contactRouting,
    productRouting
    
    
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
        'provide' : 'apiEndPoint', useValue: 'http://localhost:7070'
      }
    ],
  bootstrap: [ 
    AppComponent
    ]
})
export class AppModule { }
