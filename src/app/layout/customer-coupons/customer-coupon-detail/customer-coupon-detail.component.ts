import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Coupon } from '../../coupons/coupon.model';
import { CustomerService } from '../../customers/customer.service';

@Component({
  selector: 'app-customer-coupon-detail',
  templateUrl: './customer-coupon-detail.component.html',
  styleUrls: ['./customer-coupon-detail.component.css']
})
export class CustomerCouponDetailComponent implements OnInit {

  coupon: Coupon 
  
  id: number
  expirationWeek=false

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
      this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.coupon = this.customerService.getPurchasedCouponById(this.id)
      this.expirationWeek=checkEndDate(this.coupon.endDate)
    })
  }

  onBack(){
    this.router.navigate(['/coupons/'])
    window.scrollTo(0,0)
  }
}

function checkEndDate(endDate: Date): boolean {
  var now = new Date().getTime()
    var expiretionDate=new Date(endDate).getTime()
    var timeDiff = Math.abs(now - expiretionDate)
    var diffDays = Math.ceil(timeDiff/(1000*3600*24))
    console.log(diffDays)
    
     return diffDays<=7
}

