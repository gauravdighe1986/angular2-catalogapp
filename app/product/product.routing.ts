import {Routes, RouterModule} from "@angular/router";

import {ProductComponent} from "./product.component";
import {ProductListComponent} from "./product-list.component";

import {ProductDetailComponent} from "./product-detail.component";

const routes:Routes = [
    {
        path: 'products',
        component: ProductComponent,

        children: [
            {
                path: '',
                component: ProductListComponent
            },

            {
                path: 'detail/:id',
                component: ProductDetailComponent
            }
        ]
    } 
]

export const productRouting = RouterModule.forRoot(routes);