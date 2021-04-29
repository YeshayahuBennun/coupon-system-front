import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/account/login/login.model';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-start',
  templateUrl: './customer-start.component.html',
  styleUrls: ['./customer-start.component.css']
})
export class CustomerStartComponent implements OnInit {

  customer: Customer
  login: Login
  url: string

  constructor(private customerService: CustomerService, private route: Router) { }

  ngOnInit(): void {
    this.customerService.fetchCustomer()
    this.customerService.custEmitter.subscribe(customer => {
      this.customer = customer
    })
  }
}
