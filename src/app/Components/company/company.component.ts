import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {GraphService} from '../../services/graph-service/graph.service';
import {CompanyService} from '../../services/company-service/company.service';
import {Company} from '../../domain/Company';
import {ActivatedRoute, Router} from '@angular/router';
import {NavComponent} from '../nav/nav.component';
import {TrackingService} from '../../services/tracking-service/tracking-service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  idCompany: number;
  company: Company;
  userID : String;
  constructor(private router: Router,private graphService: GraphService, private trackingService: TrackingService, private companyService: CompanyService,private dataRoute: ActivatedRoute) {

  }

  isLogged = true;

  ngOnInit(): void {
    this.update();
  }

  update(){

    this.idCompany = this.dataRoute.snapshot.params['id'];
    this.userID = localStorage.getItem('userulnostru')
    this.isLogged = this.userID!=null;
    console.log("userid is " + this.userID)

    this.getCompany(this.idCompany);

  }

  trackCompany(): void {
    this.trackingService.trackCompanyService(this.userID, this.idCompany).subscribe(
      (value) => {
        console.log(" return status " + value)
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
  getCompany(id:number) {
    console.log("id inainte de get: " +id)
    this.companyService.getCompany(id).subscribe(company => {this.company=company
    });
  }
}
