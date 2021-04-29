import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Company } from '../../companies/company.model';
import { AdmCompanyService } from '../adm-company.service';

@Component({
  selector: 'app-adm-company-edit',
  templateUrl: './adm-company-edit.component.html',
  styleUrls: ['./adm-company-edit.component.css']
})
export class AdmCompanyEditComponent implements OnInit {

  @ViewChild("f") companyForm: NgForm

  id: number
  editMode: boolean
  company: Company = {
    id: 0,
    name: "",
    email: "",
    password: "",
    coupons: null
  }

  constructor(private route: ActivatedRoute, private admCompanyService: AdmCompanyService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]
      this.editMode = params["id"] != null

      if (this.editMode) {
        this.company = this.admCompanyService.getAdmCompanyById(this.id)
      }
    })
  }

  onSubmit() {
    this.admCompanyService.replaceCompanyAt(this.id, this.company)
  }

  onCompanyClear() {
    this.companyForm.reset()
  }

  onCompanyCancel() {
    this.router.navigate(['/adm-companies'], { relativeTo: this.route })
  }
}
