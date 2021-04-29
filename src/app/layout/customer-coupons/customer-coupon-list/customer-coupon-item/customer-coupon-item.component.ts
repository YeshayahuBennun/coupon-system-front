import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/layout/coupons/coupon.model';

@Component({
  selector: 'app-customer-coupon-item',
  templateUrl: './customer-coupon-item.component.html',
  styleUrls: ['./customer-coupon-item.component.css']
})
export class CustomerCouponItemComponent implements OnInit {

  @Input()coupon:Coupon
  @Input()id:number
  
  constructor() { }

  ngOnInit(): void {
  }
}
