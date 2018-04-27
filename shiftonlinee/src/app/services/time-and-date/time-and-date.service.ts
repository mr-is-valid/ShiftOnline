import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class TimeAndDateService {

  private http: Http;
  private url: String = 'http:/localhost:3000';

  constructor(_http: Http) {
    this.http = _http;
  }

  getCurrentTime() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.url + '/api/bullets/getTime', {}, { headers: headers })
      .map(res => res.json());

  }

  convertStringToDate(dateStr:string):Date{
    let year:number;
    let mounth:number;
    let day:number;

    let index=dateStr.indexOf('/');
    day= +dateStr.substring(0,index);
    dateStr=dateStr.substring(index+1,dateStr.length);
    index=dateStr.indexOf('/');
    mounth= +dateStr.substring(0,index);
    dateStr=dateStr.substring(index+1,dateStr.length);
    year=+dateStr;

    return new Date(year,mounth,day);


  }

  isAvailableDate(dateStr: string): boolean {

    if(dateStr.length>10) return false;

    for(let i=0;i<dateStr.length;i++){
      
      if(dateStr[i]>='0'&&dateStr[i]<='9')continue;
      else if(dateStr[i]=="/") continue;
      else return false;
    }

    let date=this.convertStringToDate(dateStr);
    //check for errors
    if (date.day < 0 || date.day > 31) return false;
    if (date.mounth < 0 || date.mounth > 12) return false;

    return true;
  }

}
export class Date{
  constructor(private _year:number,private _mounth:number,private _day:number){}

  get year(){return this._year};
  get mounth(){return this._mounth};
  get day(){return this._day};

  compare(anotherDate:Date): number{
    if(this._year>anotherDate._year) return 1;
    else if(this._year<anotherDate._year) return -1;
    else{
      if(this._mounth>anotherDate._mounth) return 1;
      else if(this._mounth<anotherDate._mounth) return -1;
      else{
        if(this._day>anotherDate._day) return 1;
        else if(this._day<anotherDate._day) return -1;
        else return 0;
      }
    }
  }

  toString():string{
    return this._day+'/'+this._mounth+'/'+this._year;
  }
}