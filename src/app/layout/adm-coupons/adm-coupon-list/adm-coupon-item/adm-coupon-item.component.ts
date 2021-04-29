import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/layout/coupons/coupon.model';

@Component({
  selector: 'app-adm-coupon-item',
  templateUrl: './adm-coupon-item.component.html',
  styleUrls: ['./adm-coupon-item.component.css']
})
export class AdmCouponItemComponent implements OnInit {

  @Input()coupon:Coupon
  @Input()id:number
  constructor() { }

  ngOnInit(): void {
  }
}
