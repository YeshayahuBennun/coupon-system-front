import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AccountService } from "src/app/account/shared/account.service";
import { StorageService } from "src/app/account/shared/storage.service";
import { Customer } from "../customers/customer.model";

@Injectable()
export class AdmCustomerService {
  private customers: Customer[]
  customer: Customer
  customersChanged = new EventEmitter<Customer[]>()
  errorChanel = new Subject<string>()

  constructor(private storageService: StorageService, private router: Router, private accountService: AccountService) {
  }

  async fetchAllCustomers() {
    (await this.storageService.getCustomers()).subscribe(customers => {
      this.customers = customers
      this.onCompanyChanged()
    })
  }

  onCompanyChanged() {
    this.customersChanged.emit(this.customers)
  }

  async deleteCustomer(id: number) {
    (await this.storageService.removeCustomer(id)).subscribe(() => {
      console.log('Delete Success')
      this.onCustomerChanged()
      this.fetchAllCustomers()
      this.router.navigate(['/adm-customers/'])
    })
  }

  onCustomerChanged() {
    this.customersChanged.emit(this.customers)
  }

  getAdmCustomerById(id: number): Customer {
    this.customers.forEach(element => {
      if (element.id === id) {
        this.customer = new Customer(element.id, element.firstName, element.lastName, element.email, element.password, element.coupons)
      }
    })
    return this.customer
  }

  async replaceCustomerAt(id: number, customer: Customer) {
    for (var i = 0; i < this.customers.length; i++) {
      if (id === this.customers[i].id) {
        this.customer[i] = customer
          ; (await this.storageService.updateAdmCustomer(customer)).subscribe(element => {
            this.customers.unshift(element)
            this.onCompanyChanged()
            this.fetchAllCustomers()
            window.alert('Update Success!')
            this.router.navigate(['/adm-customers/'])
          }, error => {
            this.errorChanel.next()
          })
      }
    }
  }
}