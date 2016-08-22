import {Component} from "@angular/core";

@Component({
    selector:'tools',
    template: `
    <h4>Tools</h4>
    
    <ul>
        <li *ngFor="let tool of tools">
            {{tool}}
        </li>
    </ul>
    `
})
export class ToolsComponent {
      tools: Array<string> = ["Angular 2", "TypeScript", "Node.js"];
}
