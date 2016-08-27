import {Component, OnInit, Inject} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    styles : [
        `
        #wrapper {
        margin-right: 50%;
        }
        #products {
        float: left;
        width: 100%;
        background-color: #CCF;
        }
        #brands {
        float: right;
        width: 50%;
        margin-right: -50%;
        background-color: #DCF;
        }
        #cleared {
        clear: both;
        }
        `
    ]	
})
export class HomeComponent {
    products: any;
    brands : any;

    constructor(private http:Http,
    @Inject("apiEndPoint") private apiEndPoint:string
    ){

    }

    ngOnInit2() {
        this.http.get(this.apiEndPoint + "/api/products")
        .map((response : Response) => response.json())
        .subscribe((data : any) => {
            this.products = data;
        })

        this.http.get(this.apiEndPoint + "/api/brands")
        .map((response : Response) => response.json())
        .subscribe((data : any) => {
            this.brands = data;
        })
    }


      ngOnInit2() {
         this.http.get(this.apiEndPoint + "/api/products")
         .toPromise()
         .then(response => this.products = response.json());

         this.http.get(this.apiEndPoint + "/api/brands")
         .toPromise()
         .then(response => this.brands = response.json());
  
    }

    

      ngOnInit() {
        

         Promise.all([
             this.http.get(this.apiEndPoint + "/api/products").toPromise(),
             this.http.get(this.apiEndPoint + "/api/brands").toPromise()
         ]).then( (results: any) => {
             var response1  = results[0];

             this.products = response1.json();

             var response2 = results[1];

             this.brands = response2.json();
         })
    }



}