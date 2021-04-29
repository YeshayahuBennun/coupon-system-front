import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from '../../customers/customer.model';
import { AdmCustomerService } from '../adm-customer.service';

@Component({
  selector: 'app-adm-customer-edit',
  templateUrl: './adm-customer-edit.component.html',
  styleUrls: ['./adm-customer-edit.component.css']
})
export class AdmCustomerEditComponent implements OnInit {

  @ViewChild("f") customerForm: NgForm

  id: number
  editMode: boolean
  customer: Customer = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    coupons: null
  }

  constructor(private route: ActivatedRoute, private admCustomerService: AdmCustomerService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]
      this.editMode = params["id"] != null

      if (this.editMode) {
        this.customer = this.admCustomerService.getAdmCustomerById(this.id)
      }
    })
  }

  onSubmit() {
    this.admCustomerService.replaceCustomerAt(this.id, this.customer)
  }

  onCustomerClear() {
    this.customerForm.reset()
  }

  onCustomerCancel() {
    this.router.navigate(['/adm-customers'], { relativeTo: this.route })
  }
}
