import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  // Must be public because I am going to bind to it in the template. Can only bind public
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
