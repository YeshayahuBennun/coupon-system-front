import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../../companies/company.model';
import { AdmCompanyService } from '../adm-company.service';

@Component({
  selector: 'app-adm-company-list',
  templateUrl: './adm-company-list.component.html',
  styleUrls: ['./adm-company-list.component.css']
})
export class AdmCompanyListComponent implements OnInit {

  @Output('companySelected') emitter = new EventEmitter<Company>()

  companies: Company[]
  constructor(private admCompanyService: AdmCompanyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.admCompanyService.fetchAllCompanies()
    this.admCompanyService.companiesChanged.subscribe((companies: Company[]) => {
      this.companies = companies
    })
  }
}
