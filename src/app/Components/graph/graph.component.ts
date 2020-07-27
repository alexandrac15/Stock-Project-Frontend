import { Component, OnInit } from '@angular/core';
import {Graph} from '../../domain/Graph';
import {GraphService} from '../../services/graph-service/graph.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  graph: Graph;
  // multi= [
  //   {
  //     "name": "Germany",
  //     "series": [
  //       {
  //         "name": "1990",
  //         "value": 62000000
  //       },
  //       {
  //         "name": "2010",
  //         "value": 73000000
  //       },
  //       {
  //         "name": "2011",
  //         "value": 89400000
  //       },
  //       {
  //         "name": "2018",
  //         "value": 89400070
  //       },
  //       {
  //         "name": "2020",
  //         "value": 99400000
  //       }
  //     ]
  //   }
  //
  //
  //
  // ];
  multi: any[];

  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Price';
  timeline: boolean = true;


  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private graphService: GraphService) { }

  ngOnInit() {
    this.update();
  }
  update(){
   this.getGraph(5);

  }

  getGraph(n: number) {

    this.graphService.getHistoricalGraph(n).subscribe(
      g => {
        console.log("in tssssssssssssssssssssssssssssssssssssssssssssssssssss: " + g.series[0])
        this.graph = g;
        g.name="alo";
        this.multi=["alo", g.series];
      }
    );
  }


}
