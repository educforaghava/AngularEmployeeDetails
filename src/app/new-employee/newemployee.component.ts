import { Component, OnInit } from '@angular/core';
import { NewEmployee } from './employee2';
import { EmpservicesService } from '../empservices.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'new-employee',
    templateUrl: './newemployee.component.html',
    styleUrls: ['./newemployee.component.css']
})

export class NewEmployeeComponent implements OnInit {

    public errorMsg: any;
    public newEmployees : NewEmployee[] = []; 
    expression : boolean = true;
    errorItem : boolean = false;
    errorMessage: string;

    constructor(private _empservices: EmpservicesService) {}

    ngOnInit() {
        this._empservices.getNewEmployees()
        .subscribe(data => { this.newEmployees = data 
            ,console.log(this.newEmployees)} 
            ,error => this.errorMessage = <any>error );

    }
    
}