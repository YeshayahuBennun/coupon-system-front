import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from '../../customers/customer.model';
import { AdmCustomerService } from '../adm-customer.service';

@Component({
  selector: 'app-adm-customer-detail',
  templateUrl: './adm-customer-detail.component.html',
  styleUrls: ['./adm-customer-detail.component.css']
})
export class AdmCustomerDetailComponent implements OnInit {

  id: number

  customer: Customer = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    coupons: null
  }

  constructor(private admCustomerService: AdmCustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.customer = this.admCustomerService.getAdmCustomerById(this.id)
    })
  }

  onEditCustomer() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  onCancelCustomer() {
    this.router.navigate(['/adm-customers/'])
  }

  onDeleteCustomer() {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      this.admCustomerService.deleteCustomer(this.id)
      this.router.navigate(['/adm-customers'], { relativeTo: this.route })
    }
  }
}
