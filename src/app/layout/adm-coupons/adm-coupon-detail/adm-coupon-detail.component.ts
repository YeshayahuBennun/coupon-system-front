import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from '../../coupons/coupon.model';
import { AdmCouponService } from '../adm-coupon.service';

@Component({
  selector: 'app-adm-coupon-detail',
  templateUrl: './adm-coupon-detail.component.html',
  styleUrls: ['./adm-coupon-detail.component.css']
})
export class AdmCouponDetailComponent implements OnInit {
  id: number
  expirationWeek = false

  coupon: Coupon = {
    id: 0,
    company: null,
    title: "",
    startDate: new Date(),
    endDate: new Date(),
    category: 0,
    amount: 0,
    description: "",
    price: 0,
    imageUrl: "",
    customers: null
  }

  constructor(private admCouponService: AdmCouponService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.coupon = this.admCouponService.getCouponById(this.id)
    })
  }

  onEditCoupon() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  onCancelCoupon() {
    this.router.navigate(['/adm-coupons/'])
  }

  onDeleteCoupon() {
    if (window.confirm('Are you sure you want to delete this coupon?')) {
      this.admCouponService.deleteCoupon(this.id)
      this.router.navigate(['/adm-coupons/'], { relativeTo: this.route })
    }
  }
}
