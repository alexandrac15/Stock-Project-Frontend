import { Component, OnInit } from '@angular/core';
import {Graph} from '../../domain/Graph';
import {GraphService} from '../../services/graph-service/graph.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  graph: Graph

  constructor(private graphService: GraphService) { }

  ngOnInit() {
    this.update();
  }
  update(){
   this.getGraph(5);

  }

  getGraph(n: number){
    this.graphService.getHistoricalGraph(n).subscribe(

      g=>{
        console.log("in ts: "+g.domain.length)
        this.graph=g;
      }
    );

  }
}
