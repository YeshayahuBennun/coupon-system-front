import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from '../../coupons/coupon.model';
import { AdmCouponService } from '../adm-coupon.service';

@Component({
  selector: 'app-adm-coupon-list',
  templateUrl: './adm-coupon-list.component.html',
  styleUrls: ['./adm-coupon-list.component.css']
})
export class AdmCouponListComponent implements OnInit {

  @Output('couponSelected') emitter = new EventEmitter<Coupon>()

  coupons: Coupon[]
  constructor(private admCouponService: AdmCouponService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.admCouponService.fetchAllCoupons()
    this.admCouponService.couponsChanged.subscribe((coupons: Coupon[]) => {
      this.coupons = coupons
    })
  }
}
