import {Component} from "@angular/core";

import {ToolsComponent} from "./tools.component";

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.component.html',
    directives: [ToolsComponent]
})
export class AboutComponent {
    title: string;

    constructor() {
        this.title = 'Mobile Store';
    }
}