import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  @ViewChild('f') customerForm: NgForm

  customer: Customer = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    coupons: null
  }

  constructor(private customerService: CustomerService, private accountService: AccountService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerService.fetchCustomer()
    this.customerService.custEmitter.subscribe(customer => {
      this.customer = customer
    })
  }

  onSubmit() {
    this.customerService.updateCustomer(this.customer)
  }

  onCustomerClear() {
    this.customerForm.reset()
  }

  onCustomerCancel() {
    this.router.navigate(['/coupons/'], { relativeTo: this.route })
  }
}
