import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/account/login/login.model';
import { AccountService } from 'src/app/account/shared/account.service';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[]
  customer: Customer
  user: string
  login: Login

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute, private accountService: AccountService) {
  }

  ngOnInit(): void {
  }
}




