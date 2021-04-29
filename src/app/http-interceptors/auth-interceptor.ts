import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AccountService } from '../account/shared/account.service';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.accountService.getAuthorizationToken()
    let request: HttpRequest<any> = req

    if (token) {
      request = req.clone({
        headers: req.headers.set('token', `${token}`)

      })
    }

    return next.handle(request).pipe(retry(1), catchError((error: HttpErrorResponse) => {
      let errorMessage = ''

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error:${error.error.message}`
      } else {
        errorMessage = `Error Code: ${error.status}\nError: ${JSON.stringify(error.error)}`
        if (error.status === 401) {
          this.router.navigate(['/login'])
        }
      }
      if (error.status === 0) {
        window.alert("Server not found")
      } else {
        window.alert(errorMessage)
      }
      return throwError(errorMessage)
    })
    )
  }
}