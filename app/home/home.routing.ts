import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from './home.component';

const routes:Routes = [
    {
        path:'home',
        component: HomeComponent
    },

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
    }
];

export const homeRouting = RouterModule.forRoot(routes);