import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer(server) {
    this.serverElements.push(server);
  }

  onAddBlueprint(blueprint) {
    this.serverElements.push(blueprint);
  }
}
