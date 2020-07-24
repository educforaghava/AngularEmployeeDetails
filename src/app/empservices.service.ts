import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NewEmployee } from './new-employee/employee2';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpservicesService {

  private url : string;

  constructor(private http: HttpClient) { 
    this.url = "http://dummy.restapiexample.com/api/v1/employees";
  }

  public getNewEmployees():Observable<NewEmployee[]> {
    
    return 
    this.http.get<NewEmployee[]>(this.url)
      .pipe(catchError((error:HttpErrorResponse)=>this.errorHandler));

  }

  errorHandler(error:HttpErrorResponse){//handler to trap errors
    return throwError(error.message);
 }

}
