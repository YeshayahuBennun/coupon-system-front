import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  @ViewChild('f') compForm: NgForm

  id: number
  company: Company = {
    id: 0,
    name: "",
    email: "",
    password: "",
    coupons: null
  }

  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.companyService.fetchCompany()
    this.companyService.companyEmitter.subscribe(company => {
      this.company = company
    })
  }

  onSubmit() {
    this.companyService.updateCompany(this.company)
  }

  onCompanyClear() {
    this.compForm.reset()
  }

  onCompanyCancel() {
    this.router.navigate(['/company-coupons/'], { relativeTo: this.route })
  }
}
