import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { CreateCompanyAccountComponent } from './account/create-company-account/create-company-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AdmCompaniesComponent } from './layout/adm-companies/adm-companies.component';
import { AdmCompanyDetailComponent } from './layout/adm-companies/adm-company-detail/adm-company-detail.component';
import { AdmCompanyEditComponent } from './layout/adm-companies/adm-company-edit/adm-company-edit.component';
import { AdmCompanyStartComponent } from './layout/adm-companies/adm-company-start/adm-company-start.component';
import { AdmCouponDetailComponent } from './layout/adm-coupons/adm-coupon-detail/adm-coupon-detail.component';
import { AdmCouponEditComponent } from './layout/adm-coupons/adm-coupon-edit/adm-coupon-edit.component';
import { AdmCouponStartComponent } from './layout/adm-coupons/adm-coupon-start/adm-coupon-start.component';
import { AdmCouponsComponent } from './layout/adm-coupons/adm-coupons.component';
import { AdmCustomerDetailComponent } from './layout/adm-customers/adm-customer-detail/adm-customer-detail.component';
import { AdmCustomerEditComponent } from './layout/adm-customers/adm-customer-edit/adm-customer-edit.component';
import { AdmCustomerStartComponent } from './layout/adm-customers/adm-customer-start/adm-customer-start.component';
import { AdmCustomersComponent } from './layout/adm-customers/adm-customers.component';
import { AdminDetailComponent } from './layout/admins/admin-detail/admin-detail.component';
import { AdminEditComponent } from './layout/admins/admin-edit/admin-edit.component';
import { AdminStartComponent } from './layout/admins/admin-start/admin-start.component';
import { AdminsComponent } from './layout/admins/admins.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { CompaniesComponent } from './layout/companies/companies.component';
import { CompanyDetailComponent } from './layout/companies/company-detail/company-detail.component';
import { CompanyEditComponent } from './layout/companies/company-edit/company-edit.component';
import { CompanyStartComponent } from './layout/companies/company-start/company-start.component';
import { CompanyCouponDetailComponent } from './layout/company-coupons/company-coupon-detail/company-coupon-detail.component';
import { CompanyCouponEditComponent } from './layout/company-coupons/company-coupon-edit/company-coupon-edit.component';
import { CompanyCouponStartComponent } from './layout/company-coupons/company-coupon-start/company-coupon-start.component';
import { CompanyCouponsComponent } from './layout/company-coupons/company-coupons.component';
import { CouponDetailComponent } from './layout/coupons/coupon-detail/coupon-detail.component';
import { CouponEditComponent } from './layout/coupons/coupon-edit/coupon-edit.component';
import { CouponStartComponent } from './layout/coupons/coupon-start/coupon-start.component';
import { CouponsComponent } from './layout/coupons/coupons.component';
import { CreateCouponComponent } from './layout/create-coupon/create-coupon.component';
import { CustomerCouponDetailComponent } from './layout/customer-coupons/customer-coupon-detail/customer-coupon-detail.component';
import { CustomerCouponEditComponent } from './layout/customer-coupons/customer-coupon-edit/customer-coupon-edit.component';
import { CustomerCouponsStartComponent } from './layout/customer-coupons/customer-coupons-start/customer-coupons-start.component';
import { CustomerCouponsComponent } from './layout/customer-coupons/customer-coupons.component';
import { CustomerDetailComponent } from './layout/customers/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './layout/customers/customer-edit/customer-edit.component';
import { CustomerStartComponent } from './layout/customers/customer-start/customer-start.component';
import { CustomersComponent } from './layout/customers/customers.component';
import { HomeComponent } from './layout/home/home.component';
import { OpeningCustomerComponent } from './layout/opening-customer/opening-customer.component';

const routes: Routes = [
  {path: '',component: HomeComponent,canActivate:[AuthGuard]},
  //Coupons
  {path:'coupons',component:CouponsComponent,
         children:[
                   {path:'',component:CouponStartComponent},
                   {path:'new',component:CouponEditComponent},
                   {path:':id',component:CouponDetailComponent},
                   {path:':id/edit',component:CouponEditComponent}
          ],canActivate:[AuthGuard]},
  //Customers
  {path:'customers',component:CustomersComponent,
         children:[
                   {path:'',component:CustomerStartComponent},
                   {path:'new',component:CustomerEditComponent},
                   {path:':id',component:CustomerDetailComponent},
                   {path:':id/edit',component:CustomerEditComponent}
         ],canActivate:[AuthGuard]},
  //customer-coupons
  {path:'customer-coupons',component:CustomerCouponsComponent,
         children:[
                   {path:'',component:CustomerCouponsStartComponent},
                   {path:'new',component:CustomerCouponEditComponent},
                   {path:':id',component:CustomerCouponDetailComponent},
                   {path:':id/edit',component:CustomerCouponEditComponent}
         ],canActivate:[AuthGuard]},
  //company-coupons
  {path:'company-coupons',component:CompanyCouponsComponent,
         children:[
                   {path:'',component:CompanyCouponStartComponent},
                   {path:'new',component:CompanyCouponEditComponent},
                   {path:':id',component:CompanyCouponDetailComponent},
                   {path:':id/edit',component:CompanyCouponEditComponent},
         ],canActivate:[AuthGuard]},       
  //Companies      
  {path:'companies',component:CompaniesComponent,
         children:[
                   {path:'',component:CompanyStartComponent},
                   {path:'new',component:CompanyEditComponent},
                   {path:':id',component:CompanyDetailComponent},
                   {path:':id/edit',component:CompanyEditComponent}
         ],canActivate:[AuthGuard]},
  //Admins
  {path:'admins',component:AdminsComponent,
         children:[
                   {path:'',component:AdminStartComponent},
                   {path:'new',component:AdminEditComponent},
                   {path:':id',component:AdminDetailComponent},
                   {path:':id/edit',component:AdminEditComponent}
         ],canActivate:[AuthGuard]},
  //Create Coupon
  {path:'create-coupon',component:CreateCouponComponent,canActivate:[AuthGuard]},
  //Opening Customer
  {path:'opening-customer',component:OpeningCustomerComponent,canActivate:[AuthGuard]},
  //Admin Companies
  {path:'adm-companies',component:AdmCompaniesComponent,
          children:[
                    {path:'',component:AdmCompanyStartComponent},
                    {path:'new',component:AdmCompanyEditComponent},
                    {path:':id',component:AdmCompanyDetailComponent},
                    {path:':id/edit',component:AdmCompanyEditComponent},
          ],canActivate:[AuthGuard]},
  //Admin Customers
  {path:'adm-customers',component:AdmCustomersComponent,
         children:[
                    {path:'',component:AdmCustomerStartComponent},
                    {path:'new',component:AdmCustomerEditComponent},
                    {path:':id',component:AdmCustomerDetailComponent},
                    {path:':id/edit',component:AdmCustomerEditComponent}
         ],canActivate:[AuthGuard]},
  //Admin Coupon
  {path:'adm-coupons',component:AdmCouponsComponent,
         children:[
                    {path:'',component:AdmCouponStartComponent},
                    {path:'new',component:AdmCouponEditComponent},
                    {path:':id',component:AdmCouponDetailComponent},
                    {path:':id/edit',component:AdmCouponEditComponent}
         ],canActivate:[AuthGuard]}
                ,
  {
    path:"",
    component:AuthenticationComponent,
    children:[
      {path:"",redirectTo:"login",pathMatch:"full"},
      {path:"login",component:LoginComponent},
      {path:"create-account",component:CreateAccountComponent},
      {path:"create-company-account",component:CreateCompanyAccountComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
