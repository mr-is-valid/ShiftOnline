import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events-status',
  templateUrl: './events-status.component.html',
  styleUrls: ['./events-status.component.css']
})
export class EventsStatusComponent implements OnInit {
    @Input() eventsData         : [{ networkName: string, eventsValues: [number] }];
    @Input() currentDate        : string;


    // lineChart
    public lineChartData:Array<any> = [
      {data: [65, 59, 80, 81, 56, 55, 100, 50,10,20,50,60,70,80,10,20,100,50,6,10,1,0,65, 59, 80, 81, 56, 55, 100], label: 'Series A', fill: false},
      {data: [28, 48, 40, 19, 86, 27, 90, 50, 56, 55, 100, 50,10,20,50,60,70,80,10,56, 55, 100, 50,10,20,50,60,100,50,10,20], label: 'Series B', fill: false},
      {data: [18, 48, 77, 9, 100, 27, 40, 50], label: 'Series C', fill: false}
    ];
    public lineChartLabels:Array<any> = ['1/4', '2/4', '3/4', '4/4', '5/4', '6/4', '7/4', '8/4', '9/4', '10/4','1/4', '2/4', '3/4', '4/4', '5/4', '6/4', '7/4', '8/4', '9/4', '10/4','1/4', '2/4', '3/4', '4/4', '5/4', '6/4', '7/4', '8/4', '9/4', '10/4'];
    public lineChartOptions:any = {
      responsive: false,
      maintainAspectRatio: false
    };

    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';
   

  constructor() { }

  ngOnInit() {
    if(!(this.currentDate.indexOf('/') >= 0)) console.log('events-status: currentData var dosent match the scheme')    
  }

}
