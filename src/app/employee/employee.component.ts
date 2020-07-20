import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees : Employee[];
  employeeList : Employee[] = [];  
  expression : boolean = true;
  errorItem : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {
        employee_id : 1,
        first_name : 'Mark',
        last_name : 'Otto',
        dept : 'HR',
        city : 'Bangalore',
        email : 'help@mdo.com',
        dob : new Date("1984-03-16"),
        salary : 200000
      },
      {
        employee_id : 2,
        first_name : 'Sangi',
        last_name : 'Raghava',
        dept : 'IT',
        city : 'Bangalore',
        email : 'help12@mdo.com',
        dob : new Date("1973-03-16"),
        salary : 300000
      },
      {
        employee_id : 3,
        first_name : 'Tulasi',
        last_name : 'Rakesh',
        dept : 'Accounts',
        city : 'Hyderabad',
        email : 'ragh@mdo.com',
        dob : new Date("1985-03-16"),
        salary : 400000
      },
      {
        employee_id : 4,
        first_name : 'Kedar',
        last_name : 'Aishwarya',
        dept : 'Tester',
        city : 'Hyderabad',
        email : 'aishu@mdo.com',
        dob : new Date("1975-03-16"),
        salary : 500000
      },
      {
        employee_id : 5,
        first_name : 'Dudi',
        last_name : 'Akshaya',
        dept : 'Tester',
        city : 'Hyderabad',
        email : 'aishu@mdo.com',
        dob : new Date("1986-03-16"),
        salary : 600000
      },
      {
        employee_id : 6,
        first_name : 'Yaha',
        last_name : 'Jene',
        dept : 'Tester',
        city : 'Hyderabad',
        email : 'aishu@mdo.com',
        dob : new Date("1976-03-16"),
        salary : 700000
      }
    ]

  }

  addEmp(emp) {
    if (this.employeeList.indexOf(emp) === -1) {
      this.employeeList.push(emp);
      this.errorItem = false;
    } else if (this.employeeList.indexOf(emp) > -1) {
      this.errorItem = true;
    }
  }

  removeEmp(emp) {
    var index = this.employeeList.indexOf(emp);
    if (index > -1) {
      this.employeeList.splice(index, 1);
    }
  }

}
