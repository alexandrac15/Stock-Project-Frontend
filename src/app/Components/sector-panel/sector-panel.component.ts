import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {Sector} from '../../domain/Sector';
import {SectorService} from '../../services/sector-service/sector.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sector-panel',
  templateUrl: './sector-panel.component.html',
  styleUrls: ['./sector-panel.component.css']
})
export class SectorPanelComponent implements OnInit,OnChanges {
  sectors: Sector[];
  spec: 1;
  constructor(private sectorService: SectorService, private router: Router) { }

  ngOnInit(): void {

    this.update()

  }
  update(){
     this.getSectors()

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("SectorPanelComponent ngOnChanges")
    this.update();

  }

  getSectors(){
     this.sectorService.getSectors().subscribe(sectors=>{

       this.sectors=sectors;
       console.log(this.sectors.length)
     })

  }

  go(idSector:number){

    console.log("FACE CEVA "+idSector);
     this.router.navigate(['sector', idSector]);



  }
}
