import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomerService } from '../../customers/customer.service';
import { Coupon } from '../coupon.model';

@Component({
  selector: 'app-coupon-detail',
  templateUrl: './coupon-detail.component.html',
  styleUrls: ['./coupon-detail.component.css']
})
export class CouponDetailComponent implements OnInit {

  coupon: Coupon
  id: number
  expirationWeek = false

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.coupon = this.customerService.getCouponById(this.id)
      this.expirationWeek = checkEndDate(this.coupon.endDate)
    })
  }

  onPuchaseNewCoupon() {
    this.customerService.appendCoupon(this.id)
  }
}

function checkEndDate(endDate: Date) {
  var now = new Date().getTime()
  var expiretionDate = new Date(endDate).getTime()
  var timeDiff = Math.abs(now - expiretionDate)
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
  console.log(diffDays)

  return diffDays <= 7
}
