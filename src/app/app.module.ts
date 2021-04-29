import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { CustomersComponent } from './layout/customers/customers.component';
import { CompaniesComponent } from './layout/companies/companies.component';
import { StorageService } from './account/shared/storage.service';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {httpInterceptorProviders} from './http-interceptors/';
import { CreateCompanyAccountComponent } from './account/create-company-account/create-company-account.component';
import { CustomerDetailComponent } from './layout/customers/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './layout/customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from './layout/customers/customer-list/customer-list.component';
import { CustomerStartComponent } from './layout/customers/customer-start/customer-start.component';
import { CustomerItemComponent } from './layout/customers/customer-list/customer-item/customer-item.component';
import { CompanyDetailComponent } from './layout/companies/company-detail/company-detail.component';
import { CompanyEditComponent } from './layout/companies/company-edit/company-edit.component';
import { CompanyListComponent } from './layout/companies/company-list/company-list.component';
import { CompanyItemComponent } from './layout/companies/company-list/company-item/company-item.component';
import { CompanyStartComponent } from './layout/companies/company-start/company-start.component';
import { CouponsComponent } from './layout/coupons/coupons.component';
import { CouponDetailComponent } from './layout/coupons/coupon-detail/coupon-detail.component';
import { CouponEditComponent } from './layout/coupons/coupon-edit/coupon-edit.component';
import { CouponItemComponent } from './layout/coupons/coupon-list/coupon-item/coupon-item.component';
import { CouponStartComponent } from './layout/coupons/coupon-start/coupon-start.component';
import { AdminsComponent } from './layout/admins/admins.component';
import { AdminEditComponent } from './layout/admins/admin-edit/admin-edit.component';
import { AdminItemComponent } from './layout/admins/admin-list/admin-item/admin-item.component';
import { AdminStartComponent } from './layout/admins/admin-start/admin-start.component';
import { CustomerService } from './layout/customers/customer.service';
import { AccountService } from './account/shared/account.service';
import { HeaderComponent } from './layout/headers/header/header.component';
import { CustomerCouponsComponent } from './layout/customer-coupons/customer-coupons.component';
import { CustomerCouponListComponent } from './layout/customer-coupons/customer-coupon-list/customer-coupon-list.component';
import { CouponListComponent } from './layout/coupons/coupon-list/coupon-list.component';
import { CompanyCouponsComponent } from './layout/company-coupons/company-coupons.component';
import { CompanyCouponDetailComponent } from './layout/company-coupons/company-coupon-detail/company-coupon-detail.component';
import { CompanyCouponEditComponent } from './layout/company-coupons/company-coupon-edit/company-coupon-edit.component';
import { CompanyCouponListComponent } from './layout/company-coupons/company-coupon-list/company-coupon-list.component';
import { CompanyCouponItemComponent } from './layout/company-coupons/company-coupon-list/company-coupon-item/company-coupon-item.component';
import { CompanyCouponStartComponent } from './layout/company-coupons/company-coupon-start/company-coupon-start.component';
import { CompanyService } from './layout/companies/company.service';
import { CreateCouponComponent } from './layout/create-coupon/create-coupon.component';
import { AdmCompaniesComponent } from './layout/adm-companies/adm-companies.component';
import { AdmCompanyStartComponent } from './layout/adm-companies/adm-company-start/adm-company-start.component';
import { AdmCompanyDetailComponent } from './layout/adm-companies/adm-company-detail/adm-company-detail.component';
import { AdmCompanyEditComponent } from './layout/adm-companies/adm-company-edit/adm-company-edit.component';
import { AdmCompanyListComponent } from './layout/adm-companies/adm-company-list/adm-company-list.component';
import { AdmCompanyItemComponent } from './layout/adm-companies/adm-company-list/adm-company-item/adm-company-item.component';
import { AdmCompanyService } from './layout/adm-companies/adm-company.service';
import { AdmCustomersComponent } from './layout/adm-customers/adm-customers.component';
import { AdmCustomerDetailComponent } from './layout/adm-customers/adm-customer-detail/adm-customer-detail.component';
import { AdmCustomerEditComponent } from './layout/adm-customers/adm-customer-edit/adm-customer-edit.component';
import { AdmCustomerListComponent } from './layout/adm-customers/adm-customer-list/adm-customer-list.component';
import { AdmCustomerItemComponent } from './layout/adm-customers/adm-customer-list/adm-customer-item/adm-customer-item.component';
import { AdmCustomerStartComponent } from './layout/adm-customers/adm-customer-start/adm-customer-start.component';
import { AdmCustomerService } from './layout/adm-customers/adm-customer.service';
import { AdmCouponsComponent } from './layout/adm-coupons/adm-coupons.component';
import { AdmCouponStartComponent } from './layout/adm-coupons/adm-coupon-start/adm-coupon-start.component';
import { AdmCouponDetailComponent } from './layout/adm-coupons/adm-coupon-detail/adm-coupon-detail.component';
import { AdmCouponEditComponent } from './layout/adm-coupons/adm-coupon-edit/adm-coupon-edit.component';
import { AdmCouponListComponent } from './layout/adm-coupons/adm-coupon-list/adm-coupon-list.component';
import { AdmCouponItemComponent } from './layout/adm-coupons/adm-coupon-list/adm-coupon-item/adm-coupon-item.component';
import { AdmCouponService } from './layout/adm-coupons/adm-coupon.service';
import { AdmHeaderComponent } from './layout/headers/adm-header/adm-header.component';
import { AdminService } from './layout/admins/admin.service';
import { OpeningCustomerComponent } from './layout/opening-customer/opening-customer.component';
import{NgxSpinnerModule} from 'ngx-spinner'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent,
    CustomersComponent,
    CompaniesComponent,
    CreateCompanyAccountComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerStartComponent,
    CustomerItemComponent,
    CompanyDetailComponent,
    CompanyEditComponent,
    CompanyListComponent,
    CompanyItemComponent,
    CompanyStartComponent,
    CouponsComponent,
    CouponDetailComponent,
    CouponEditComponent,
    CouponListComponent,
    CouponItemComponent,
    CouponStartComponent,
    AdminsComponent,
    AdminEditComponent,
    AdminItemComponent,
    AdminStartComponent,
    HeaderComponent,
    CustomerCouponsComponent,
    CustomerCouponListComponent,
    CompanyCouponsComponent,
    CompanyCouponDetailComponent,
    CompanyCouponEditComponent,
    CompanyCouponListComponent,
    CompanyCouponItemComponent,
    CompanyCouponStartComponent,
    CreateCouponComponent,
    AdmCompaniesComponent,
    AdmCompanyStartComponent,
    AdmCompanyDetailComponent,
    AdmCompanyEditComponent,
    AdmCompanyListComponent,
    AdmCompanyItemComponent,
    AdmCustomersComponent,
    AdmCustomerDetailComponent,
    AdmCustomerEditComponent,
    AdmCustomerListComponent,
    AdmCustomerItemComponent,
    AdmCustomerStartComponent,
    AdmCouponsComponent,
    AdmCouponStartComponent,
    AdmCouponDetailComponent,
    AdmCouponEditComponent,
    AdmCouponListComponent,
    AdmCouponItemComponent,
    AdmHeaderComponent,
    OpeningCustomerComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
    
  ],
  providers: [StorageService,httpInterceptorProviders,CustomerService,AccountService,CompanyService,AdmCompanyService,AdmCustomerService,AdmCouponService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
