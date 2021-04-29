import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/layout/coupons/coupon.model';

@Component({
  selector: 'app-company-coupon-item',
  templateUrl: './company-coupon-item.component.html',
  styleUrls: ['./company-coupon-item.component.css']
})
export class CompanyCouponItemComponent implements OnInit {

  @Input()coupon:Coupon
  @Input()id:number
  
  constructor() { }

  ngOnInit(): void {
  }
}
