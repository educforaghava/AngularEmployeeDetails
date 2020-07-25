import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApiResponse } from './new-employee/employee2';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpservicesService {

  private url : string;

  constructor(private http: HttpClient) { 
    this.url = "http://dummy.restapiexample.com/api/v1/employees";
  }

  public getNewEmployees(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.url);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
