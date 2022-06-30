import { Component } from '@angular/core';
import { Message } from './chat/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chat: Message[] = [];

  constructor() { }

  addMessage($event: any) {
    if ($event.content && $event.sender)
      this.chat.push(this.createMessage($event.content, $event.sender))
  }

  createMessage(content: string, sender: string): Message {
    var date = new Date;

    return ({
      content: content,
      sender: sender,
      time: (date.getHours().toString().padStart(2, '0')+":"+date.getMinutes().toString().padStart(2, '0'))
    })
  }
}
