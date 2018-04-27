import { MessagesService } from './../../services/messages/messages.service';
import { TimeAndDateService,Date} from './../../services/time-and-date/time-and-date.service';
import { Message,MessageContent } from './../../services/messages/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-messages',
  templateUrl: './general-messages.component.html',
  styleUrls: ['./general-messages.component.css']
})
export class GeneralMessagesComponent implements OnInit {

  private messages = [];
  private messagesService: MessagesService;
  private timeAndDateService: TimeAndDateService;
  private today: Date;

  constructor(service: MessagesService, timeAndDateService: TimeAndDateService) {
    this.messagesService = service;
    this.timeAndDateService = timeAndDateService;

    this.messagesService.getMessages().subscribe(res => {
      res.messages.forEach(element => {
        let tempMessage = new Message(element.name, element.dateOfCreation, element.lastUpdate, element.color, element.content);
        tempMessage.id = element._id;
        this.messages.push(tempMessage);
      });
    });

    this.timeAndDateService.getCurrentTime().subscribe(res => { //get current time from server
      this.today=new Date(res.year,res.mounth,res.day);

    });
  }

  ngOnInit() {
  }

  addMessage(name) {

    let newMessage: Message = new Message(name, this.today.toString(), this.today.toString(), 'green', [new MessageContent(this.today, '')]);//create new message with the new data
    this.messagesService.addMessage(newMessage).subscribe(res => {//push the message to the server
      console.log(res.msg);//print the response
      if (res.succsess) {
        newMessage.id = res.id; //get the id from the server
        this.messages.push(newMessage);
      }
    });

  }

  handleRemoveClick(message){
    let index = this.messages.indexOf(message); //remove message from the ui
    this.messages.splice(index, 1);
  }
  handleModalClick(name){
    console.log(name);
    this.addMessage(name);
  }
  saveAllMessages() {
    this.messages.forEach(element => {
   //   this.savemessage(element);
    });
  }

}
