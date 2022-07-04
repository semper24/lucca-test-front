import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {  
  textContent = "";
  @Input() chatName: string;
  @Input() chat: Message[];

  @Output() newMessageEvent = new EventEmitter<{content: string, sender: string}>();

  addMessage() {
    if (this.textContent) {
      this.newMessageEvent.emit({content: this.textContent, sender: this.chatName});
      this.textContent=''
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
