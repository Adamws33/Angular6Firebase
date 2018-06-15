import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

​
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newMessageTitle = '';
  newMessageContent = '';
​
  constructor(private messageService: MessageService) { }
​
  ngOnInit() {
  }
​
createMessage() {
  if (
    this.newMessageTitle.trim() === '' || this.newMessageContent.trim() === ''
  ) {
    return;
  }
  // TODO: send to firebase
  this.messageService.sendMessage(this.newMessageTitle, this.newMessageContent);
}
}
