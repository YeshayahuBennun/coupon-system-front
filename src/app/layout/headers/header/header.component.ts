import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/shared/account.service';
import { CustomerService } from '../../customers/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginCategory$: Observable<string>
  loginFirstName$: Observable<string>
  userName: string

  showMenu: boolean

  constructor(private accountService: AccountService, private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  logout() {
    if (window.confirm('Are you sure you want to log out?')) {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('userName')
      window.localStorage.removeItem('category')

      this.router.navigate(['/login'])
    }
  }

  onPerfil() {
    if (window.localStorage.getItem('category') == '1') {
      this.router.navigate(['customers/:id/edit'])
    }

    if (window.localStorage.getItem('category') == '2') {
      this.router.navigate(['companies/:id/edit'])
    }
  }

  onMyCoupons() {
    if (window.localStorage.getItem('category') == '1') {
      this.router.navigate(['customer-coupons'])
    }

    if (window.localStorage.getItem('category') == '2') {
      this.router.navigate(['company-coupons'])
    }
  }
}
