import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from '../../coupons/coupon.model';
import { CustomerService } from '../../customers/customer.service';

@Component({
  selector: 'app-customer-coupon-list',
  templateUrl: './customer-coupon-list.component.html',
  styleUrls: ['./customer-coupon-list.component.css']
})
export class CustomerCouponListComponent implements OnInit {

  @Output('couponSelected') emitter = new EventEmitter<Coupon>()
  coupons: Coupon[]

  constructor(private customerService:CustomerService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.customerService.fetchPurchasedCoupons()
    this.customerService.puchasedChanged.subscribe((coupons:Coupon[])=>{
    this.coupons=coupons
    })
  }
}
