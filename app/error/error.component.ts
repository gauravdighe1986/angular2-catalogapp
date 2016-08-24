import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'error',
    template: `
    <h3>Some Error happended while processing web page!!</h3>
    `
})
export class ErrorComponent implements OnInit {
    constructor() { }

    ngOnInit() { 

        let error = window.sessionStorage.getItem("__error__");
        if (error) {
            console.log("Error ", error);
        }
    }
}


@Component({
    selector: 'notfound-error',
    template: `
        <h3>
        The page you requested no more found on this website.
        </h3>
        <p>
        If you are developer, make sure that you append error routing at the end of routing configuration
        </p>
        `
})
export class NotFoundComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {

    }
}


//For Demonstration purpose, what if the web component throw exception, which must be handled

@Component({
    template: `
        Error in component, thrown exception..
        `
})
export class ThrowRandomErrorComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
        console.log("throw exception");
        throw new Error("Unexpected error while processing this component");
    }
}