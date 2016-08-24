import { Component, Inject, OnInit } from '@angular/core';

import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'product-edit',
    templateUrl: 'app/product/product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
    product: any = {};

    constructor(private router:Router, 
                private route:ActivatedRoute, 
                private http:Http,
                @Inject("apiEndPoint") private apiEndPoint:string
                ) { }

    ngOnInit() { 
        this.route.params.forEach((params: Params) => {
            let productId = params['id'];
            if (productId) {
                this.getProduct(productId); 
            } else 
            {
                this.product = {};
            }
        })

    }

    getProduct(id: any) {
        this.http.get(this.apiEndPoint + '/api/products/' + id)
        .map((response: Response) => response.json())
        .subscribe((data: any) => this.product = data);
    }

    saveProduct() {
        let body = JSON.stringify(this.product);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (this.product.id) {
            return this.http.put(this.apiEndPoint + '/api/products/' + this.product.id , body, options)
                            .map((response: Response) => response.json())
                            .subscribe((data: any) => this.product = data);
        }
        else {
            return this.http.post(this.apiEndPoint + '/api/products' , body, options)
                            .map((response: Response) => response.json())
                            .subscribe((data: any) => this.product = data);
        }
    }
}