import { EventEmitter, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { StorageService } from "src/app/account/shared/storage.service";
import { Coupon } from "../coupons/coupon.model";
import { Company } from "./company.model";

@Injectable()
export class CompanyService {
    company: Company
    private coupons: Coupon[]
    companyEmitter = new EventEmitter<Company>()
    companyCouponsEmitter = new EventEmitter<Coupon[]>()
    couponsChanged = new EventEmitter<Coupon[]>()
    coupon: Coupon
    errorChanel = new Subject<string>()

    constructor(private storageService: StorageService, private router: Router, private route: ActivatedRoute) {
    }

    async fetchCompany() {
        (await this.storageService.getCompany()).subscribe(company => {
            this.company = company
            this.companyEmitter.emit(company)
        })
    }

    async fetchCompanyCoupons() {
        (await this.storageService.getCompanyCoupons()).subscribe(coupons => {
            this.coupons = coupons.sort(function (a, b) {
                if (a.amount < b.amount) {
                    return -1
                }
                if (a.amount > b.amount) {
                    return 1
                }
                return 0
            })
            this.companyCouponsEmitter.emit(this.coupons)
        })
    }

    getCouponById(id: number) {
        this.getCoupons().forEach(element => {
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
                    ; (await this.storageService.updateCoupon(coupon)).subscribe(element => {
                        this.coupons.unshift(element)
                        this.onCouponsChanged()
                        this.fetchCompanyCoupons()
                        this.router.navigate(['/company-coupons/'])
                    }, error => {
                        this.errorChanel.next()
                    })
            }
        }
    }

    onCouponsChanged() {
        this.couponsChanged.emit(this.getCoupons())
    }

    getCoupons(): Coupon[] {
        return this.coupons.slice()
    }

    async updateCompany(company: Company) {
        (await this.storageService.updateCompany(company)).subscribe(company => {
            this.company = company
            this.fetchCompany()
            window.alert('Update Success')
            this.router.navigate(['/companies/:id/edit'])
        })
    }

    showByTitle() {
        this.companyCouponsEmitter.emit(this.coupons.sort(function (a, b) {
            if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
                return -1
            }
            if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) {
                return 1
            }
            return 0
        }))
    }

    showByStartDate() {
        this.companyCouponsEmitter.emit(this.coupons.sort(function (a, b) {
            if (a.startDate < b.startDate) {
                return -1
            }
            if (a.startDate > b.startDate) {
                return 1
            }
            return 0
        }))
    }

    showByEndDate() {
        this.companyCouponsEmitter.emit(this.coupons.sort(function (a, b) {
            if (a.endDate < b.endDate) {
                return -1
            }
            if (a.endDate > b.endDate) {
                return 1
            }
            return 0
        }))
    }

    async appendCoupon(coupon: Coupon) {
        (await this.storageService.postCoupon(coupon)).subscribe(coupon => {
            this.coupons.unshift(coupon)
            this.onCouponsChanged()
            this.fetchCompanyCoupons()

            if (this.coupons === null) {
                this.router.navigate(['/home'], { relativeTo: this.route })
            }

            this.router.navigate(['/company-coupons/'])
        })
    }

    async createCoupon(coupon: Coupon) {
        (await this.storageService.postCoupon(coupon)).subscribe(coupon => {
            window.alert('Coupon Created Success!')
            this.router.navigate(['/company-coupons'])
        })
    }

    async deleteCoupon(id: number) {
        (await this.storageService.removeCoupon(id)).subscribe(() => {
            console.log('Delete Success')
            this.onCouponsChanged()
            this.fetchCompanyCoupons()

            if (this.coupons === null) {
                this.router.navigate(['/companies'])
            }
            
            this.router.navigate(['/company-coupons/'])
        })
    }
}