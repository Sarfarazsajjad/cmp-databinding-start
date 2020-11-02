import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {

  @Output('serverCreateEvent') onServerCreate = new EventEmitter<{name:string,content:string,type:string}>();
  @Output('blueprintCreateEvent') onBlueprintCreate = new EventEmitter<{name:string,content:string,type:string}>();
  newServerName;
  newServerContent;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.onServerCreate.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.onServerCreate.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
