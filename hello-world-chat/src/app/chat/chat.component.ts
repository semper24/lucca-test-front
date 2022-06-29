import { Component, OnInit } from '@angular/core';
import { Message } from './message';
import * as uuid from 'uuid';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chat: Message[] = [
    { 'id': '0', 'sender': 'A', 'content': "Bonjour B !", 'time': "03:22" },
    { 'id': '1', 'sender': 'B', 'content': "Salut A !", 'time': "03:54" },
  ];
  textChatA = '';
  textChatB = '';


  constructor() { }

  createMessage(content: string, sender: string): Message {
    var date = new Date;

    return ({
      content: content,
      sender: sender,
      id: uuid.v4(),
      time: (date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0'))
    })
  }

  sendMessageFrom(sender: string): void {
    if (sender == 'A' && this.textChatA) {
      this.chat.push(this.createMessage(this.textChatA, "A"))
      this.textChatA = ''
    }
    else if (sender == 'B' && this.textChatB) {
      this.chat.push(this.createMessage(this.textChatB, "B"))
      this.textChatB = ''
    }
  }

  ngOnInit(): void {
  }

}
