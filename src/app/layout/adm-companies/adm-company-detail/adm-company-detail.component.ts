import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Company } from '../../companies/company.model';
import { AdmCompanyService } from '../adm-company.service';

@Component({
  selector: 'app-adm-company-detail',
  templateUrl: './adm-company-detail.component.html',
  styleUrls: ['./adm-company-detail.component.css']
})
export class AdmCompanyDetailComponent implements OnInit {
  
  id: number
  company: Company = {
    id: 0,
    name: "",
    email: "",
    password: "",
    coupons: null
  }

  constructor(private admCompanyService: AdmCompanyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.company = this.admCompanyService.getAdmCompanyById(this.id)
    })
  }

  onEditCompany() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  onCancelCompany() {
    this.router.navigate(['/adm-companies/'])
  }

  onDeleteCompany() {
    if (window.confirm('Are you sure you want to delete this company?')) {
      this.admCompanyService.deleteCompany(this.id)
      this.router.navigate(['/adm-companies'], { relativeTo: this.route })
    }
  }
}
