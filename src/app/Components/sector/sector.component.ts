import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SectorService} from '../../services/sector-service/sector.service';
import {CompanyService} from '../../services/company-service/company.service';
import {ActivatedRoute, Router, NavigationStart} from '@angular/router';
import {Company} from '../../domain/Company';
import {Sector} from '../../domain/Sector';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit ,OnChanges{
  companies: Company[]
  idSector: number;
  constructor(private sectorService: SectorService, private companyService: CompanyService, private dataRoute: ActivatedRoute, private router: Router) {// this.idSector = this.dataRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

    console.log("we're in sector component");
    this.update();
  }
  update(){
    console.log("in update la sector comp")
    this.idSector = this.dataRoute.snapshot.params['id'];

    this.getCompaniesBySector(this.idSector)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("SectorComponent ngOnChanges")

    this.update();
  }

  getCompaniesBySector(idSector: number){
    this.companyService.getCompaniesBySector(this.idSector).subscribe(companies=>{
      this.companies=companies;
    })
  }

}
