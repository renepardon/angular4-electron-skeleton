import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = String;
    currentJustify = 'justified';

    constructor() {
        const app = electron.remote.app;
        this.title = app.getAppPath();

        const platform = require('os').platform();
        console.log(platform);
    }
}
