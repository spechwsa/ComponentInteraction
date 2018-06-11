import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input("childMessage") message: string;

  messageToParent: string ;

  @Output() messageEvent = new EventEmitter<string>();


  sendMessage() {
    this.messageToParent = "Hola Mundo!";
    this.messageEvent.emit(this.messageToParent)
  }
  cleardMessage() {
    this.messageToParent = "";
    this.messageEvent.emit(this.messageToParent)
  }

  constructor() { }

  ngOnInit() {
  }

}