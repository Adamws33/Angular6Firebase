import { Component, OnInit } from '@angular/core';
​
import { MessageService } from '../services/message.service';
​
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
​
  constructor(public messageService: MessageService) { }
​
ngOnInit() {
  this.messageService.getAllMessages();
}
​
}
