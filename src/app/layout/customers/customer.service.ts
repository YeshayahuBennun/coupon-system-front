import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AccountService } from "src/app/account/shared/account.service";
import { StorageService } from "src/app/account/shared/storage.service";
import { Coupon } from "../coupons/coupon.model";
import { Customer } from "./customer.model";

@Injectable()
export class CustomerService {
    private customer: Customer
    customers: Customer[]
    customersEmitter = new EventEmitter<Customer[]>()
    custEmitter = new EventEmitter<Customer>()
    errorChanel = new Subject<string>()
    userName: string
    private coupons: Coupon[]
    couponsChanged = new EventEmitter<Coupon[]>()
    puchasedCoupons: Coupon[]
    puchasedChanged = new EventEmitter<Coupon[]>()

    coupon: Coupon
    purchasedCoupon:Coupon

    constructor(private storageService: StorageService, private router: Router, private accountService: AccountService) {

    }

    async fetchAllCustomers() {
        (await this.storageService.getAllCustomers())
            .subscribe(customers => {
                this.customers = customers
                this.customersEmitter.emit(this.customers)

            }, error => {
                this.errorChanel.next("There was an error trying to fetch the user")
            })
    }

    async fetchCustomer() {
        (await this.storageService.getCustomer()).subscribe(customer => {
            this.customer = customer
            this.custEmitter.emit(customer)
        })
    }

    async fetchAllCoupons() {
        (await this.storageService.getCupons()).subscribe(coupons => {
            this.coupons = coupons
            this.onCouponChanged()
        })
    }

    onCouponChanged() {
        this.couponsChanged.emit(this.getCoupons())
    }

    getCoupons(): Coupon[] {
        return this.coupons.slice()
    }

    getCustomer() {
        return this.customer
    }

    async fetchPurchasedCoupons() {
        (await this.storageService.getPurchasedCoupons()).subscribe(coupons => {
            this.puchasedCoupons = coupons
            this.onPuchasedCouponsChanged()
        })
    }

    getPuchasedCoupons() {
        return this.puchasedCoupons.slice()
    }

    onPuchasedCouponsChanged() {
        this.puchasedChanged.emit(this.puchasedCoupons)
    }

    getCouponById(id: number): Coupon {
        this.coupons.forEach(element => {
            if (element.id === id) {
                this.coupon = new Coupon(element.id, element.company, element.title, element.startDate, element.endDate, element.category, element.amount, element.description, element.price, element.imageUrl, element.customers)
            }
        })
        return this.coupon
    }

    getPurchasedCouponById(id: number): Coupon {
        this.puchasedCoupons.forEach(element => {
            if (element.id === id) {
                this.purchasedCoupon = new Coupon(element.id, element.company, element.title, element.startDate, element.endDate, element.category, element.amount, element.description, element.price, element.imageUrl, element.customers)
            }
        })
        return this.purchasedCoupon
    }

    async appendCoupon(id: number) {
        (await this.storageService.purchaseCoupon(id)).subscribe(coupon => {
            this.coupons.splice(coupon.id)
            this.onCouponChanged()
            this.fetchAllCoupons()
            window.alert('Purchasing Success!')
            this.router.navigate(['/coupons'])
        })
    }

    async updateCustomer(customer: Customer) {
        (await this.storageService.updateCustomer(customer)).subscribe(updatedCustomer => {
            this.customer = customer
            this.fetchCustomer
            window.alert('Update Success')
            this.router.navigate(['/customer-edit'])
        })
    }
}