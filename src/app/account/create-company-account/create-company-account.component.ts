import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-create-company-account',
  templateUrl: './create-company-account.component.html',
  styleUrls: ['./create-company-account.component.css']
})
export class CreateCompanyAccountComponent implements OnInit {

  account = {
    name: "",
    email: "",
    password: ""
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createCompanyAccount(this.account)

      window.alert('Registrantion Success')
      this.router.navigate(['/login'])
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
}
