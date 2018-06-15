import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
​
import { MessageService } from '../services/message.service';
​
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
​
  constructor(public messageService: MessageService, private router: Router) { }
​
  ngOnInit() {
    if ( Object.keys(this.messageService.messageWeAreEditing).length === 0) {
      this.router.navigateByUrl('/');
    }
  }
​
}
