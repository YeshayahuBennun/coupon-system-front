import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../login/login.model';

@Injectable()

export class AccountService {

  userLogin: Login
  showMenuEmitter = new EventEmitter<boolean>()

  constructor(private http: HttpClient) { }

  async login(user: any) {

    const result = await this.http.post<any>(`${environment.api}/login-customers`, user).toPromise()
    if (result && result.access_token) {
      window.localStorage.setItem('token', result.access_token);
      window.localStorage.setItem('category', user.category)
      window.localStorage.setItem('userName', user.email)

      this.showMenuEmitter.emit(true)

      return true
    }
    return false
  }

  async companyLogin(user: any) {
    const result = await this.http.post<any>(`${environment.api}/login-companies`, user).toPromise()
    if (result && result.access_token) {
      window.localStorage.setItem('token', result.access_token);
      window.localStorage.setItem('category', user.category)
      window.localStorage.setItem('userName', user.email)

      return true
    }
    return false
  }

  async adminLogin(user: any) {
    const result = await this.http.post<any>(`${environment.api}/login-admin`, user).toPromise()
    if (result && result.access_token) {
      window.localStorage.setItem('token', result.access_token);

      return true
    }
    return false
  }

  async createAccount(account: any) {
    return await this.http.post<any>(`${environment.api}/customers/add`, account).toPromise()
  }

  async createCompanyAccount(account: any) {
    return await this.http.post<any>(`${environment.api}/companies/add`, account).toPromise()
  }

  getAuthorizationToken() {
    return window.localStorage.getItem('token')
  }
}
