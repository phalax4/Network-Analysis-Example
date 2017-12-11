import {Component, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'bar-chart-demo',
  templateUrl: './bar-chart-demo.html',
  styleUrls: ['./bar-chart-demo.component.css']
})

export class BarChartDemoComponent {
  public lineChartOptions: any = {
   maintainAspectRatio: true,
    responsive: true,
  };

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public lineChartLabels:Array<any> = ['to', 'the', 'and', 'of', 'i', 'a', 'it', 'her', 'was', 'she', 'in', 'not', 'you', 'be', 'that', 'he', 'had', 'but', 'as', 'for', 'have', 'is', 'with', 'very', 'mr', 'his', 'at', 'so', 's', 'emma', 'all', 'could', 'would', 'been', 'him', 'no', 'my', 'mrs', 'on', 'any', 'do', 'were', 'miss', 'me', 'by', 'will', 'must', 'which', 'there', 'from', 'they', 'what', 'this', 'harriet', 'or', 'such', 'much', 'if', 'said', 'more', 'an', 'are', 'one', 'weston', 'every', 'them', 'am', 'than', 'well', 'thing', 'knightley', 'elton', 'think', 'how', 'should', 'your', 'when', 'little', 'being', 'never', 'good', 'did', 'we', 'only', 'know', 'might', 'woodhouse', 'say', 'now', 'their', 'jane', 'own', 'who', 'can', 'quite', 'herself', 'time', 'great', 'some', 'nothing', 'too', 'before', 'has', 'about', 'most', 'dear', 'fairfax', 'always', 'man', '?"', 'thought', 'soon', 'churchill', 'see', 'other', 'may', 'again', 'shall', 'without', 'out', 'first', 'frank', 'father', 'sure', 'indeed', 'like', 'made', 'body', 'ever', 'oh', 'day', 'young', 'up', 'two', 'friend', 'though', 'better', 'come', 'then', 'just', 'into', 'after', 'hartfield', 'give', 'upon', 'way', 'here', 'really', 'make', 'bates', 'having', 'long', 'rather', 'himself', 'us', 'hope', 'done', 'cannot', 'seemed', 'over', 'away', 'many', 'poor', 'wish', 'while', 'even', 'go', 'woman', 'however', 'home', 'does', 'enough', 'mind', 'happy', 'highbury', 'yes', 'its', 'look', 'going', 'heard', 'moment', 'came', 'last', 'take', 'half', 'love', 'room', 'pleasure', 'still', 'another', 'felt', 'something', 'sort', 'morning', 'yet', 'letter', 'saw', 'few', 'myself', 'till'];
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  public barChartHasRendered: number = 1;

  public lineChartData: Array<any> = [
    {data: [5239, 5201, 4896, 4291, 3178, 3129, 2528, 2469, 2398, 2340, 2188, 2140, 1980, 1975, 1806, 1806, 1624, 1441, 1436, 1347, 1320, 1240, 1217, 1202, 1153, 1145, 1031, 974, 935, 865, 845, 837, 820, 759, 759, 742, 728, 699, 692, 654, 640, 600, 599, 573, 571, 570, 567, 556, 549, 546, 540, 536, 526, 506, 494, 489, 486, 485, 484, 467, 464, 455, 452, 440, 435, 432, 425, 415, 401, 398, 389, 385, 383, 371, 369, 364, 363, 359, 358, 358, 358, 352, 349, 341, 337, 326, 313, 310, 309, 306, 301, 301, 294, 284, 282, 279, 279, 264, 262, 256, 254, 250, 250, 249, 248, 241, 241, 238, 235, 230, 226, 224, 224, 222, 221, 221, 219, 217, 214, 212, 209, 208, 207, 204, 202, 200, 199, 193, 193, 193, 192, 192, 190, 178, 177, 177, 173, 172, 169, 165, 163, 161, 160, 159, 159, 155, 154, 153, 152, 148, 147, 146, 146, 146, 145, 143, 142, 142, 141, 139, 138, 138, 136, 135, 133, 132, 132, 131, 131, 130, 130, 129, 128, 125, 125, 125, 122, 121, 120, 120, 120, 119, 119, 119, 118, 117, 117, 115, 115, 114, 113, 113, 112, 111, 109, 109, 108, 106, 103, 102]
      , label: 'Count'}
  ];

  public randomize(): void {
    if (this.chart !== undefined && (this.barChartHasRendered <= 3)) {
      this.chart.ngOnDestroy();
      this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
      this.barChartHasRendered += 1;
    }

  }
}
