import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commandments',
  templateUrl: './commandments.component.html',
  styleUrls: ['./commandments.component.css']
})
export class CommandmentsComponent implements OnInit {

  public dibroteList: Array<any> = [
                                      {dibraText : 'אחמשים מתקשרים לצידקי ב 7:30 ואומרים לו בוקר טוב'},
                                      {dibraText : 'אחמשים מתקשרים לצידקי ב 8:30 מתארים לו כוח אדם'},
                                      {dibraText : 'אחמ"ש LAN בודק נשק'} ,
                                      {dibraText : 'כל החלפת תורנות יש לעדכן את מור ור"צ'},
                                      {dibraText : 'יש ליפתוח תקלה ולתעד במשל וב CRM'},
                                      {dibraText : 'כל נקודה חדשה שמבקשים לגרש יש לבקש אישור מלירון'},
                                      {dibraText : 'אין לחמם נקודות N'},
                                      {dibraText : 'אין להיכנס לכנרית לבור ולצמות בצריפין עם ציוד חכם ללא תעודה'},
                                      {dibraText : 'אין להסתובב ברחבי הבסיס לא מדוגמים'}
                                    ];

  constructor() { }

  ngOnInit() {
  }

}
