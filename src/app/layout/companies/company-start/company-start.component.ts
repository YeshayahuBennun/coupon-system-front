import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-start',
  templateUrl: './company-start.component.html',
  styleUrls: ['./company-start.component.css']
})
export class CompanyStartComponent implements OnInit {

  username: string

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.username=window.localStorage.getItem('userName')
  }

  createCoupon() {
    this.router.navigate(['/create-coupon'])
  }

  showMyCoupons(){
    this.router.navigate(['/company-coupons'])
  }

  showMyPerfil(){
    this.router.navigate(['/companies/:id/edit'])
  }
}
