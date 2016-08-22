import {Component} from "@angular/core";
import {Inject} from "@angular/core";
import {OnInit} from "@angular/core";

import {ActivatedRoute, Params} from "@angular/router";
import {Http, Response} from "@angular/http";

@Component({
    templateUrl: 'app/product/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    productId : number;
    product : any = {};

    constructor(private route: ActivatedRoute, 
                private http: Http,
                @Inject("apiEndPoint") private apiEndPoint:string
                ) {
        
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.productId = params['id'];
            this.getProduct();
        })
    }

    getProduct() {
        this.http.get(this.apiEndPoint + '/api/products/' + this.productId)
        .map((response: Response) => response.json())
        .subscribe((data: any) => this.product = data);
    }

    goBack() {
        window.history.back();
    }
    

    //import {Router, ActivatedRoute} from "@angular/router";
    //this.router.navigate(['/contacts/detail/' + id, {'extra' : 2}]);


}