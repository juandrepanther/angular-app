import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { environment } from 'environments/environment.development'
import { Observable, catchError, retry, throwError } from 'rxjs'
import { Product } from 'types'
import { ErrorService } from './error.service'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // other services can be connected via inject as below
  http = inject(HttpClient)
  errorService = inject(ErrorService)

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(environment.FAKE_API_URL, {
        params: new HttpParams({ fromObject: { limit: 14 } }),
      })
      .pipe(catchError(this.errorHandler.bind(this)), retry(2))
  }

  createProducts(product: Product): Observable<Product> {
    return this.http
      .post<Product>(environment.FAKE_API_URL, product)
      .pipe(catchError(this.errorHandler.bind(this)), retry(2))
  }

  // method is connected with common error service below
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => new Error(error.message))
  }
}
