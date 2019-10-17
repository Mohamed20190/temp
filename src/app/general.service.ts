import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IHero } from './ihero';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  heroServerUrl = 'http://localhost:3000/hero';
  errorData: {};

  constructor(private http: HttpClient) {}

  getHero() {
    return this.http
      .get<IHero>(this.heroServerUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('client side error:', errorResponse.error.message);
    } else {
      console.log(
        `BackEnd error code ${errorResponse.status},` +
          `Body was ${errorResponse.error}`
      );
    }
    this.errorData = {
      errorTitle: 'OOPS! There is an error',
      errorDesc: 'The data not loaded correctly'
    };
    return throwError(this.errorData);
  }
}
