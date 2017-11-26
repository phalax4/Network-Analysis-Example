import {Component, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'bar-chart-demo',
  templateUrl: './bar-chart-demo.html',
  styleUrls: ['./bar-chart-demo.component.css']
})

export class BarChartDemoComponent {
  public barChartOptions:any = {
    maintainAspectRatio: true,
    responsive: true,
  };

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartHasRendered: number = 1;

  public barChartData: any[] =  [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize(): void {
    if (this.chart !== undefined && (this.barChartHasRendered <= 3)) {
      this.chart.ngOnDestroy();
      this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
      this.barChartHasRendered += 1;
    }

  }
}
