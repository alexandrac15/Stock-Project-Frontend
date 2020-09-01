import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login-service/login-service.service';
import {GraphService} from '../../services/graph-service/graph.service';

@Component({
  selector: 'app-tracked-panel',
  templateUrl: './tracked-panel.component.html',
  styleUrls: ['./tracked-panel.component.css']
})
export class TrackedPanelComponent implements OnInit {

  constructor(private loginService : LoginService, private graphService : GraphService) { }

  ngOnInit(): void {
    this.update()
  }

  update(){

    console.log(this.loginService.getSet())

    this.graphService.getAllGraphs(this.loginService.getSet(),5).subscribe(

      (result) => {
        console.log(result)
      }

    )

  }

}
