import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../companies/company.service';
import { Coupon } from '../../coupons/coupon.model';

@Component({
  selector: 'app-company-coupon-list',
  templateUrl: './company-coupon-list.component.html',
  styleUrls: ['./company-coupon-list.component.css']
})
export class CompanyCouponListComponent implements OnInit {

  coupons: Coupon[]

  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.companyService.fetchCompanyCoupons()
      this.companyService.companyCouponsEmitter.subscribe(coupons => {
      this.coupons = coupons
    })
  }
}
