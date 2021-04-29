import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    if (window.localStorage.getItem('category') === "1") {
      this.router.navigate(['/coupons'])
    } else if (window.localStorage.getItem('category') === "2") {
      this.router.navigate(['/company-coupons'])
    } else {
      this.router.navigate(['/admins/'])
    }
  }
}
