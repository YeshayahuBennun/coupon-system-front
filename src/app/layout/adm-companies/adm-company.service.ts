import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AccountService } from "src/app/account/shared/account.service";
import { StorageService } from "src/app/account/shared/storage.service";

import { Company } from "../companies/company.model";

@Injectable()
export class AdmCompanyService {

  private companies: Company[]
  company: Company
  companiesChanged = new EventEmitter<Company[]>()
  errorChanel = new Subject<string>()

  constructor(private storageService: StorageService, private router: Router, private accountService: AccountService) {
  }

  async fetchAllCompanies() {
    (await this.storageService.getCompanies()).subscribe(companies => {
      this.companies = companies
      this.onCompanyChanged()
    })
  }

  onCompanyChanged() {
    this.companiesChanged.emit(this.companies)
  }

  async deleteCompany(id: number) {
    (await this.storageService.removeCompany(id)).subscribe(() => {
      console.log('Delete Success')
      this.onCompanyChanged()
      this.fetchAllCompanies()
      this.router.navigate(['/adm-companies/'])
    })
  }

  getAdmCompanyById(id: number): Company {
    this.companies.forEach(element => {
      if (element.id === id) {
        this.company = new Company(element.id, element.name, element.email, element.password, element.coupons)
      }
    })
    return this.company
  }

  async replaceCompanyAt(id: number, company: Company) {
    for (var i = 0; i < this.companies.length; i++) {
      if (id === this.companies[i].id) {
        this.company[i] = company
          ; (await this.storageService.updateAdmCompany(company)).subscribe(element => {
            this.companies.unshift(element)
            this.onCompanyChanged()
            this.fetchAllCompanies()
            window.alert('Update Success')
            this.router.navigate(['/adm-companies/'])
          }, error => {
            this.errorChanel.next()
          })
      }
    }
  }
}