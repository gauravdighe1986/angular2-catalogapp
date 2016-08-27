
import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
 
@Injectable()
export class ContactsResolve implements Resolve<any>
{
    constructor( ) {
        console.log("ContactsResolve::constructor");
    }

    resolve(route: ActivatedRouteSnapshot):any
    {
        return null;
    }

}