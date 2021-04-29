import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Coupon } from '../../coupons/coupon.model';
import { AdmCouponService } from '../adm-coupon.service';

@Component({
  selector: 'app-adm-coupon-edit',
  templateUrl: './adm-coupon-edit.component.html',
  styleUrls: ['./adm-coupon-edit.component.css']
})
export class AdmCouponEditComponent implements OnInit {

  @ViewChild("f") couponForm: NgForm

  id: number
  editMode: boolean

  coupon: Coupon = {
    id: 0,
    company: null,
    title: "",
    startDate: new Date('yyyy-MM-dd'),
    endDate: new Date('yyyy-MM-dd'),
    category: 0,
    amount: 0,
    description: "",
    price: 0,
    imageUrl: "",
    customers: null
  }

  constructor(private route: ActivatedRoute, private admCouponService: AdmCouponService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]
      this.editMode = params["id"] != null

      if (this.editMode) {
        this.coupon = this.admCouponService.getCouponById(this.id)
      }
    })
  }

  onSubmit() {
    this.admCouponService.replaceCouponAt(this.id, this.coupon)
  }

  onCouponClear() {
    this.couponForm.reset()
  }

  onCouponCancel() {
    this.router.navigate(['/adm-coupons'], { relativeTo: this.route })
  }
}
