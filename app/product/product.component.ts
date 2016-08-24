import {Component} from "@angular/core";

import {Router} from "@angular/router";


@Component({
    templateUrl: 'app/product/product.component.html'
})
export class ProductComponent {
    constructor(private router:Router) {

    }

    newProduct()
    {
        this.router.navigate(['/products/create']);
    }
}