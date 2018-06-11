import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentMessage: string;

  message: string;

  receiveMessage($event) {
    this.message = $event
  }

  sendMessage() {
    this.parentMessage = "hello child";
  }
  cleardMessage() {
    this.parentMessage = "";
  }



  constructor(private data: DataService) { }

  ngOnInit() {
  }

}