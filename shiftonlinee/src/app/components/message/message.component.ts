import { Date, TimeAndDateService } from './../../services/time-and-date/time-and-date.service';
import { MessagesService, Message, MessageContent } from './../../services/messages/messages.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input('messageData') message: Message;
  @Input('today') today:Date;
  @Output('removeMessageClick') removeMessageClick = new EventEmitter();

  private currentContent = 0;

  private readOnly:boolean=true;
  
  private messagesService: MessagesService;
  private messageContentValue:string;
  
  constructor(messagesService: MessagesService) {
    this.messagesService = messagesService;
    
  }

  ngOnInit() {
    this.currentContent = this.message.content.length - 1;
    this.messageContentValue=this.message.content[this.currentContent]._content;
  }

  newerContent() {
    if (this.currentContent < this.message.content.length - 1) this.currentContent++;
    this.messageContentValue=this.message.content[this.currentContent]._content;
  }

  olderContent() {
    if (this.currentContent > 0) this.currentContent--;
    this.messageContentValue=this.message.content[this.currentContent]._content;
  }

  removeMessage(bellet) {
    this.messagesService.removeMessage(bellet._id).subscribe(res => {
      console.log(res.msg);
      if (res.succsess) {
        //remove seccess from the db
        this.removeMessageClick.emit(this.message);
      }
    });
  }

  saveMessage(message) {
    var newContent: MessageContent = new MessageContent(this.today, this.messageContentValue);
    var lastContant: MessageContent = message.content[message.content.length - 1];
    
    if (this.today.compare(lastContant._updateTime)==1)//newContent.updateTime.compare(lastContant._updateTime) == 1)//the new contant's upsate time is newer then the last update (pass at list one day since the last update)
    {
      //push new content to the object
      this.messagesService.addNewContentToMessage(message.id,newContent).subscribe(res=>{
        this.message.content.push(newContent);
      });
    }
    else//the contant updated at the same time as the last update
    {
      //change the last update without create new one
      this.messagesService.updateTodayContentOfMessage(message.id,newContent).subscribe(res=>{
        this.message.content[this.message.content.length-1]=newContent;
      });
    }

    this.message.lastUpdate=newContent.updateTime.toString();

  }

  handleUpdateClick(newName:string){
    this.messagesService.updateName(this.message.id,newName).subscribe(res=>{
      this.message.name=newName;
    });
  }

}
