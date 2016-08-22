import {Component} from "@angular/core";
import {Inject} from "@angular/core";

import 'rxjs/add/operator/toPromise';

import {Http, Response} from "@angular/http";

@Component({
    templateUrl: 'app/product/product-list.component.html',
})
export class ProductListComponent {
    products: any;

    /*
    constructor(private http:Http) {
        http.get("http://localhost:7070/api/products")
         .toPromise()
         .then(response => this.products = response.json());
    }*/

 
     constructor(private http:Http, @Inject("apiEndPoint") private apiEndPoint:string) {
         
        this.http.get(apiEndPoint + "/api/products")
        .map((res:Response) => res.json())
        .subscribe(
            data => { this.products = data},
            err => console.error(err),
            () => console.log('done')
        );

    }


}