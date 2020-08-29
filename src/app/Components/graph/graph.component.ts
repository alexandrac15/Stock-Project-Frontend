import {Component, Input, OnInit} from '@angular/core';
import {Graph} from '../../domain/Graph';
import {GraphService} from '../../services/graph-service/graph.service';
import {CompanyService} from '../../services/company-service/company.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() idCompany: -1;
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
  schemeType:string='ordinal';


  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private graphService: GraphService, private companyService: CompanyService) { }

  ngOnInit() {
    this.multi = null;
    this.update();
  }
  update(){

    //this.getJustHistoricGraph1(this.idCompany,7);
    this.getChart(this.idCompany,7);

  }

  getChart(idCompany:number, n: number) {

    this.graphService.getChart(idCompany,n).subscribe(
      g => {

        let historics= new Graph();
        let predictions= new Graph();

        historics.series = g[0].series;
        predictions.series = g[1].series;
        predictions.series.unshift(historics.series[historics.series.length - 1])

        historics.name = "historic_data";
        predictions.name = "predictions";

        this.multi=[historics,predictions];
      }
    );
  }


  getJustHistoricGraph1(idCompany: number, days: number){

    this.graphService.getJustHistoricGraph(idCompany, days).subscribe(graph => {
      console.log("Graph length is "+ graph.series.length)
      this.graph=graph;
      graph.name="alo";
      this.multi=[graph];


    });
  }


}
