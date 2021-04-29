import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../companies/company.service';
import { Coupon } from '../../coupons/coupon.model';

@Component({
  selector: 'app-company-coupon-detail',
  templateUrl: './company-coupon-detail.component.html',
  styleUrls: ['./company-coupon-detail.component.css']
})
export class CompanyCouponDetailComponent implements OnInit {

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

  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.coupon = this.companyService.getCouponById(this.id)
      this.expirationWeek = checkEndDate(this.coupon.endDate)
    })
  }

  onEditCoupon() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  onCancelCoupon() {
    this.router.navigate(['/company-coupons/'])
  }

  onDeleteCoupon() {
    if (window.confirm('Are you sure you want to delete this coupon?')) {
      this.companyService.deleteCoupon(this.id)
      this.router.navigate(['/home/'], { relativeTo: this.route })
    }
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



