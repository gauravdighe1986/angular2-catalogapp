/*
BEWARE: PUT THIS FILE AT END AS WE USE WILD CARD ** 
 */
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error.component';
import { NotFoundComponent } from './error.component';
import {ThrowRandomErrorComponent} from "./error.component";

export const routes: Routes = [
  //call localhost:port/throw-error to raise an exception
  { path: 'throw-error', component : ThrowRandomErrorComponent},

  //used  to show the error to user
  { path: 'error', component: ErrorComponent }//,
/*

  //Keep this at end
   {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  },
*/

];

export const errorRouting = RouterModule.forRoot(routes);

export const routedComponents = [NotFoundComponent];
