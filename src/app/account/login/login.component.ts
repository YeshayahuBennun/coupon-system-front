import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login = {
    email: "",
    password: "",
    category: ""
  };
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.login.category === "1") {
      try {
        const result = await this.accountService.login(this.login);
        console.log(`Login Successfull: ${result}`);
        window.alert('Login Successfull!')
        this.router.navigate(['/opening-customer'])

      } catch (error) {
        console.error(error)
      }
    } else if (this.login.category === "2") {
      try {
        const result = await this.accountService.companyLogin(this.login);
        console.log(`Login Successfull: ${result}`);
        window.alert('Login Successfull!')
        this.router.navigate(['/companies/'])

      } catch (error) {
        console.error(error)
      }
    } else {
      try {
        const result = await this.accountService.adminLogin(this.login);
        console.log(`Login Successfull: ${result}`);
        window.alert('Login Successfull!')
        this.router.navigate(['/admins/']) 
      } catch (error) {
        console.error(error)
      }
    }
  }
}
