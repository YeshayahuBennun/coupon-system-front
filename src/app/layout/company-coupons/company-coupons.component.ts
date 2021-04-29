import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../companies/company.service';

@Component({
  selector: 'app-company-coupons',
  templateUrl: './company-coupons.component.html',
  styleUrls: ['./company-coupons.component.css']
})
export class CompanyCouponsComponent implements OnInit {

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
  }

  onShowByTitle() {
    this.companyService.showByTitle()
  }

  onShowByStartDate() {
    this.companyService.showByStartDate()
  }

  onShowByEndDate() {
    this.companyService.showByEndDate()
  }

  onCreatNewCoupon() {
    this.router.navigate(['/company-coupons/new'])
  }
}
