import {Component} from "@angular/core";

import {ContactService} from "./contact.service";

@Component({
    selector: 'contact',
    providers: [
        {
            provide: ContactService, useClass:ContactService
        }
    ],

    templateUrl: 'app/contact/contact.component.html'
})
export class ContactComponent {
    contacts: any;
    
    constructor(private contactService:ContactService) {
        this.contacts = contactService.getContacts();
    }
}