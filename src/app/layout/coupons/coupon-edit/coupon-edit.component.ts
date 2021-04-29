import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyService } from '../../companies/company.service';
import { Coupon } from '../coupon.model';

@Component({
  selector: 'app-coupon-edit',
  templateUrl: './coupon-edit.component.html',
  styleUrls: ['./coupon-edit.component.css']
})
export class CouponEditComponent implements OnInit {

  @ViewChild("f") contactForm: NgForm

  id: number
  editMode: boolean
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
    } else {
      this.companyService.appendCoupon(this.coupon)
    }
  }

  onCouponClear() {
    this.contactForm.reset()
  }

  onCouponCancel() {
    this.router.navigate(['/company-coupons'], { relativeTo: this.route })
  }
}
