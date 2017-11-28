import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = String;

    constructor() {
        var app = electron.remote.app;
        this.title = app.getAppPath();

        var platform = require('os').platform();
        alert(platform);
    }
}
