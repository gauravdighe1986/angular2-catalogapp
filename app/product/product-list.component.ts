import {Component, OnInit} from "@angular/core";
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
         
      
    }

    ngOnInit() {
          this.http.get(this.apiEndPoint + "/api/products")
        .map((res:Response) => res.json())
        .subscribe(
            data => { this.products = data},
            err => console.error(err),
            () => console.log('done')
        );
    }

    deleteProduct(id: any) {
        this.http.delete(this.apiEndPoint + "/api/products/" +id)
        .subscribe((response : Response) => {
            console.log("Deleted");

            this.products.forEach((p:any, i:number) => {
                if (p.id == id) { this.products.splice(i, 1); }
            });
            
        })
    }


}