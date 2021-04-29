import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/layout/customers/customer.model';

@Component({
  selector: 'app-adm-customer-item',
  templateUrl: './adm-customer-item.component.html',
  styleUrls: ['./adm-customer-item.component.css']
})
export class AdmCustomerItemComponent implements OnInit {

  @Input()customer:Customer
  @Input()id:number
  constructor() { }

  ngOnInit(): void {
  }
}
