import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pit-boss-bubble',
  templateUrl: './pit-boss-bubble.component.html',
  styleUrls: ['./pit-boss-bubble.component.css']
})
export class PitBossBubbleComponent implements OnInit {

  @Input() pitBossName      : string;
  @Input() pitBossImageUrl  : string;
  @Input() pitBossRole      : string;

  constructor() { }

  ngOnInit() {
  }

}
