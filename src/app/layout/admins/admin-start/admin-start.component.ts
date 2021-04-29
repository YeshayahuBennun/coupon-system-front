import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-start',
  templateUrl: './admin-start.component.html',
  styleUrls: ['./admin-start.component.css']
})
export class AdminStartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onShowAllCoupons() {
    this.router.navigate(['/adm-coupons'])
  }

  onShowAllCustomers() {
    this.router.navigate(['/adm-customers'])
  }

  onShowAllCompanies() {
    this.router.navigate(['/adm-companies'])
  }
}
