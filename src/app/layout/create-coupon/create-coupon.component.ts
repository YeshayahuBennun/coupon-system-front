import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../companies/company.service';
import { Coupon } from '../coupons/coupon.model';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  @ViewChild("f") coupForm: NgForm

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

  constructor(private route: ActivatedRoute, private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.companyService.createCoupon(this.coupon)
  }

  onCouponClear() {
    this.coupForm.reset()
  }

  onCouponCancel() {
    this.router.navigate(['/company-coupons'], { relativeTo: this.route })
  }
}
