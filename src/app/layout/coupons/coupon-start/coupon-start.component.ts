import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-start',
  templateUrl: './coupon-start.component.html',
  styleUrls: ['./coupon-start.component.css']
})
export class CouponStartComponent implements OnInit {

  username: string

  constructor() { }

  ngOnInit(): void {
    this.username = window.localStorage.getItem('userName')
  }
}
