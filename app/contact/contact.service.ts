import {Injectable} from "@angular/core";

@Injectable()
export class ContactService {
    contacts :any;

    constructor() {
        this.contacts = [
            {
                name: 'Example Technologies Private Ltd',
                address : {country: 'India', city:'Bangalore'}
            },

            {
                name: 'Example Private Ltd',
                address: {country: 'India', city:'Pune'}
            }
        ]
    }

    getContacts():any {
        return this.contacts;
    }
}