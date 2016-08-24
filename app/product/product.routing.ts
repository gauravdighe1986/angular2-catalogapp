import {Routes, RouterModule} from "@angular/router";

import {ProductComponent} from "./product.component";
import {ProductListComponent} from "./product-list.component";

import {ProductDetailComponent} from "./product-detail.component";
import {ProductEditComponent} from "./product-edit.component";


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
            ,

            {
                path: 'edit/:id',
                component: ProductEditComponent
            },

            {
                path: 'create',
                component: ProductEditComponent
            }
        ]
    } 
]

export const productRouting = RouterModule.forRoot(routes);