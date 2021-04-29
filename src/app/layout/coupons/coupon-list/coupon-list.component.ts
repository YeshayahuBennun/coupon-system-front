import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../customers/customer.service';
import { Coupon } from '../coupon.model';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {

  @Output('couponSelected') emitter = new EventEmitter<Coupon>()

  coupons: Coupon[]
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.customerService.fetchAllCoupons()
      this.customerService.couponsChanged.subscribe((coupons: Coupon[]) => {
        this.coupons = coupons
      })
  }
}
