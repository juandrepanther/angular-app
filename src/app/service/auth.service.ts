import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { ErrorService } from './error.service'
import { User, UserRegisterResponse, UserType } from 'types'
import { environment } from 'environments/environment.development'
import { catchError, retry, tap, throwError } from 'rxjs'
import { getToken, storeToken } from 'lib/utils'
import { SuccessService } from './success.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient)
  errorService = inject(ErrorService)
  successService = inject(SuccessService)

  register({ email, password, username }: User) {
    return this.http
      .post<UserRegisterResponse>(environment.AUTH_API_URL + 'api/users', {
        user: {
          email,
          password,
          username,
        },
      })
      .pipe(
        tap((response) => {
          console.log(response.user.token)
          storeToken(response.user.token)
        }),
        catchError(this.errorHandler.bind(this)),
        retry(2),
      )
  }

  login({ email, password }: User) {
    return this.http
      .get<UserType>(environment.AUTH_API_URL + 'api/user', {
        headers: {
          Authorization: `Token ${getToken()}`,
        },
      })
      .pipe(
        tap((response) => {
          console.log(response, 'Logged successfully')
          this.successService.setSuccessStatus(true)
        }),
        catchError(this.errorHandler.bind(this)),
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => new Error(error.message))
  }
}
