import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-adm-header',
  templateUrl: './adm-header.component.html',
  styleUrls: ['./adm-header.component.css']
})
export class AdmHeaderComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  onProfile() {
    this.router.navigate(['/admins/:id/edit'])
  }

  onCompanies() {
    this.router.navigate(['/adm-companies'])
  }

  onCustomers() {
    this.router.navigate(['/adm-customers'])
  }

  onCoupons() {
    this.router.navigate(['/adm-coupons'])

  }

  logout() {
    if (window.confirm('Are you sure you want to log out?')) {
      window.localStorage.removeItem('token')
      this.router.navigate(['/login'])
    }

  }

}
