import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from "../../layout/customers/customer.model";
import { Coupon } from "../../layout/coupons/coupon.model";
import { Company } from "../../layout/companies/company.model";
import { Admin } from "src/app/layout/admins/admin.model";

@Injectable()
export class StorageService {
    constructor(private http: HttpClient) {

    }

    //Authenticaion

    getSessionToken(): Observable<string> {
        return this.http.get<string>("http://localhost:8080/api/login-customers")

    }

    //Customers

    async getAllCustomers(): Promise<Observable<Customer[]>> {
        const result = this.http.get<Customer[]>("http://localhost:8080/api/customers/get-all")
        return result
    }

    async getCustomer(): Promise<Observable<Customer>> {
        return this.http.get<Customer>("http://localhost:8080/api/customers/get")

    }

    async getCupons(): Promise<Observable<Coupon[]>> {
        return this.http.get<Coupon[]>("http://localhost:8080/api/customers/coupons/get-all")
    }

    async getPurchasedCoupons(): Promise<Observable<Coupon[]>> {
        return this.http.get<Coupon[]>("http://localhost:8080/api/customers/coupons/get-purchased")
    }

    async purchaseCoupon(id: number): Promise<Observable<any>> {
        return this.http.post<any>(`http://localhost:8080/api/customers/coupons/purchase/${id}`, null)
    }

    async updateCustomer(customer: Customer): Promise<Observable<Customer>> {
        return this.http.put<Customer>('http://localhost:8080/api/customers/update', customer)
    }

    //Company

    async getCompany(): Promise<Observable<Company>> {
        return this.http.get<Company>('http://localhost:8080/api/companies/get')
    }

    async getCompanyCoupons(): Promise<Observable<Coupon[]>> {
        return this.http.get<Coupon[]>('http://localhost:8080/api/companies/get-coupons')
    }

    async postCoupon(coupon: Coupon): Promise<Observable<Coupon>> {
        return this.http.post<Coupon>('http://localhost:8080/api/companies/add-coupons', coupon)
    }

    async updateCoupon(coupon: any): Promise<Observable<any>> {

        return this.http.post<any>('http://localhost:8080/api/companies/update-coupons', {
            id: coupon.id,
            company: coupon.company,
            title: coupon.title,
            startDate: coupon.startDate,
            endDate: coupon.endDate,
            category: coupon.category,
            amount: coupon.amount,
            description: coupon.description,
            price: coupon.price,
            imageUrl: coupon.imageUrl,
            customers: coupon.customers
        })
    }

    async removeCoupon(id: number): Promise<Observable<any>> {
        return this.http.delete<any>(`http://localhost:8080/api/companies/delete-coupon/${id}`)
    }

    async updateCompany(company: Company): Promise<Observable<Company>> {
        return this.http.put<Company>('http://localhost:8080/api/companies/update', company)
    }

    //Admin
    async getCompanies(): Promise<Observable<Company[]>> {
        return this.http.get<Company[]>("http://localhost:8080/api/companies/get-all")
    }

    async updateAdmCompany(company: any): Promise<Observable<any>> {
        return this.http.put<Company>('http://localhost:8080/api/companies/update-by-admin', {
            id: company.id,
            name: company.name,
            email: company.email,
            password: company.password,
            coupons: company.coupons
        })
    }

    async removeCompany(id: number): Promise<Observable<any>> {
        return this.http.delete<any>(`http://localhost:8080/api/companies/${id}/delete`)
    }

    async getCustomers(): Promise<Observable<Customer[]>> {
        return this.http.get<Customer[]>("http://localhost:8080/api/customers/get-all")
    }

    async removeCustomer(id: number): Promise<Observable<any>> {
        return this.http.delete<any>(`http://localhost:8080/api/customers/delete/${id}`)
    }

    async updateAdmCustomer(customer: any): Promise<Observable<any>> {
        return this.http.put<Company>('http://localhost:8080/api/customers/update-by-admin', {
            id: customer.id,
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            password: customer.password,
            coupons: customer.coupons
        })
    }

    async getAdmCoupons(): Promise<Observable<Coupon[]>> {
        return this.http.get<Coupon[]>('http://localhost:8080/api/coupons/get-all')
    }

    async removeAdmCoupon(id: number): Promise<Observable<any>> {
        return this.http.delete<any>(`http://localhost:8080/api/companies/coupons/delete/${id}`)
    }

    async updateAdmCoupon(coupon: any): Promise<Observable<any>> {
        return this.http.put<any>('http://localhost:8080/api/companies/coupons/adm-update', {
            id: coupon.id,
            company: coupon.company,
            title: coupon.title,
            startDate: coupon.startDate,
            endDate: coupon.endDate,
            category: coupon.category,
            amount: coupon.amount,
            description: coupon.description,
            price: coupon.price,
            imageUrl: coupon.imageUrl,
            customers: coupon.customers
        })
    }

    async getAdmin(): Promise<Observable<Admin>> {
        return this.http.get<Company>('http://localhost:8080/api/admins/get')
    }

    async updateAdmin(admin: Admin):Promise<Observable<Admin>> {
        return this.http.put<Admin>('http://localhost:8080/api/admins/update', admin)
    }
}