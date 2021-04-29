import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AccountService } from "src/app/account/shared/account.service";
import { StorageService } from "src/app/account/shared/storage.service";
import { Coupon } from "../coupons/coupon.model";

@Injectable()
export class AdmCouponService {

  private coupons: Coupon[]
  coupon: Coupon
  couponsChanged = new EventEmitter<Coupon[]>()
  errorChanel = new Subject<string>()

  constructor(private storageService: StorageService, private router: Router, private accountService: AccountService) {
  }

  async fetchAllCoupons() {
    (await this.storageService.getAdmCoupons()).subscribe(coupons => {
      this.coupons = coupons
      this.onCouponsChanged()
    })
  }
  onCouponsChanged() {
    this.couponsChanged.emit(this.coupons)
  }

  async deleteCoupon(id: number) {
    (await this.storageService.removeAdmCoupon(id)).subscribe(() => {
      console.log('Delete Success')
      this.onCouponsChanged()
      this.fetchAllCoupons()

      if (this.coupons === null) {
        this.router.navigate(['/adm-coupons'])
      }

      this.router.navigate(['/adm-coupons/'])
    })
  }

  getCouponById(id: number): Coupon {
    this.coupons.forEach(element => {
      if (element.id === id) {
        this.coupon = new Coupon(element.id, element.company, element.title, element.startDate, element.endDate, element.category, element.amount, element.description, element.price, element.imageUrl, element.customers)
      }
    })
    return this.coupon
  }

  async replaceCouponAt(id: number, coupon: Coupon) {
    for (var i = 0; i < this.coupons.length; i++) {
      if (id === this.coupons[i].id) {
        this.coupon[i] = coupon
          ; (await this.storageService.updateAdmCoupon(coupon)).subscribe(element => {
            this.coupons.unshift(element)
            this.onCouponsChanged()
            this.fetchAllCoupons()
            window.alert('Update Success!')
            this.router.navigate(['/adm-coupons/'])
          }, error => {
            this.errorChanel.next()
          })
      }
    }
  }
}