import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyService } from '../../companies/company.service';
import { Coupon } from '../../coupons/coupon.model';

@Component({
  selector: 'app-company-coupon-edit',
  templateUrl: './company-coupon-edit.component.html',
  styleUrls: ['./company-coupon-edit.component.css']
})
export class CompanyCouponEditComponent implements OnInit {
  @ViewChild("f") contactForm: NgForm

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
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]
      this.editMode = params["id"] != null
      if (this.editMode) {
        this.coupon = this.companyService.getCouponById(this.id)
      }
    })
  }

  onSubmit() {
    if (this.editMode) {
      this.companyService.replaceCouponAt(this.id, this.coupon)
    } else {
      this.companyService.appendCoupon(this.coupon)
      window.alert('Coupon Created Success!')
      this.router.navigate(['/home/'], { relativeTo: this.route })
    }
  }

  onCouponClear() {
    this.contactForm.reset()
  }

  onCouponCancel() {
    this.router.navigate(['/company-coupons'], { relativeTo: this.route })
  }
}
