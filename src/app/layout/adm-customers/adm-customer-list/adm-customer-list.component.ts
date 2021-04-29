import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../customers/customer.model';
import { AdmCustomerService } from '../adm-customer.service';

@Component({
  selector: 'app-adm-customer-list',
  templateUrl: './adm-customer-list.component.html',
  styleUrls: ['./adm-customer-list.component.css']
})
export class AdmCustomerListComponent implements OnInit {

  @Output('customerSelected') emitter = new EventEmitter<Customer>()
  
  customers: Customer[]

  constructor(private admCustomerService: AdmCustomerService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.admCustomerService.fetchAllCustomers()
    this.admCustomerService.customersChanged.subscribe((customers: Customer[]) => {
      this.customers = customers
    })
  }
}
