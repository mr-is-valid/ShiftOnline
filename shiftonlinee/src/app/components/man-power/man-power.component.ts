import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-man-power',
  templateUrl: './man-power.component.html',
  styleUrls: ['./man-power.component.css']
})
export class ManPowerComponent implements OnInit {
  @Input() manPowerStatistics   : {};
  @Input() manPowerDetailed     : {};

  // Pie
  public pieChartLabels:string[] = ['חופש', 'אחרי משמרת', 'תורנויות', 'אחר', 'כוח אדם במחלקה'];
  public pieChartData:number[] = [10, 10, 5, 5, 20];
  public pieChartType:string = 'pie';
 
  public pieChartOptions:any = {
    responsive: false,
    maintainAspectRatio: false
  };

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
