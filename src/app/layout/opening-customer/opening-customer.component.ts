import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opening-customer',
  templateUrl: './opening-customer.component.html',
  styleUrls: ['./opening-customer.component.css']
})
export class OpeningCustomerComponent implements OnInit {

  username: string

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.username=window.localStorage.getItem('userName')
  }

  onToCouponsStore(){
    this.router.navigate(['/coupons'])
  }

  onToMyCoupons(){
    this.router.navigate(['/customer-coupons'])
  }

  onProfile(){
    this.router.navigate(['/customers/:id/edit'])
  }
}
