import {Routes, RouterModule} from "@angular/router";

import {AboutComponent} from './about.component';

const routes: Routes = [
    {
        path : 'about',
        component: AboutComponent
    }
];

export const aboutRouting = RouterModule.forRoot(routes);
