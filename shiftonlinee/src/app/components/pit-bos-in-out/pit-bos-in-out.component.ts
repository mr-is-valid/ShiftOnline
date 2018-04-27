import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pit-bos-in-out',
  templateUrl: './pit-bos-in-out.component.html',
  styleUrls: ['./pit-bos-in-out.component.css']
})
export class PitBosInOutComponent implements OnInit {

  pitBossImageUrl : string = 'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/22089523_1707779525908473_4601209041474943550_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEkJC25d3TUyZ2uzI8AaOAWRQJ5kubXSM_xApak1UdkvQLQEbnlHagXXoyXFhhPBGImNB51LVJXi4iXcnkesEkBpXsRgfopwxwL4F4dYtqYNA&oh=7b6c0aa04af66f9a519e21c9cf7100bc&oe=5B29656B';
  constructor() { }

  ngOnInit() {
  }

}
