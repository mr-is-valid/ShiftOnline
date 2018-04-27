import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Date } from './../time-and-date/time-and-date.service';

import 'rxjs/add/operator/map';


@Injectable()
export class MessagesService {

  private http:Http;
  private url:String='http://localhost:3000/api/messages/';

  constructor(http:Http) {
    this.http=http;
   }

  getMessages() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'getAllMessages', {}, { headers: headers}).map(res=>res.json());
  }

  removeMessage(messageID){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.url+'removeMessage', {id: messageID}, { headers: headers}).map(res=>res.json());
  }

  addMessage(newMessage){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'addMessage', {
      "name": newMessage.name,
      "dateOfCreation": newMessage.dateOfCreation,
      "lastUpdate": newMessage.lastUpdate,
      "color": newMessage.color,
      "content": newMessage.content}
       , { headers: headers}).map(res=>res.json());
  }

  addNewContentToMessage(messageID:string,newContent:MessageContent){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'addNewContentToMessage',{
      "messageID":messageID,
      "contentUpdateTime":newContent.updateTime,
      "contentValue":newContent.content
    },{headers: headers}).map(res=>res.json());
  }

  updateTodayContentOfMessage(messageID:string,newContent:MessageContent){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'updateTodayContentOfMessage',{
      "messageID":messageID,
      "contentUpdateTime":newContent.updateTime,
      "contentValue":newContent.content
    },{headers: headers}).map(res=>res.json());
  }

  updateName(messageID:string,newName:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'updatenewName',{
      "messageID":messageID,
      "newName":newName
    },{headers: headers}).map(res=>res.json());
  }

}


export class Message{
  private _id:string;
  constructor(
    private _name:string,
    private _dateOfCreation:string,
    private _lastUpdate:string,
    private _color:string,
    private _content:Array<MessageContent>){
    }

    get id(){return this._id;}
    get name(){return this._name;}
    get dateOfCreation(){return this._dateOfCreation;}
    get lastUpdate(){return this._lastUpdate;}
    get color(){return this._color;}
    get content(){return this._content;}

    set color(value:string){this._color=value};
    set name(value:string){this._name=value};
    set id(value:string){this._id=value};
    set lastUpdate(value:string){this._lastUpdate=value;}

}

export class MessageContent{
  constructor(public _updateTime:Date,public _content:string){}

  get updateTime(){ return this._updateTime;}
  get content(){return this._content};
}