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
        email : 'help@mdo.com'
      },
      {
        employee_id : 2,
        first_name : 'Dudi',
        last_name : 'Raghava',
        dept : 'IT',
        city : 'Bangalore',
        email : 'help12@mdo.com'
      },
      {
        employee_id : 3,
        first_name : 'Dudi',
        last_name : 'Rakesh',
        dept : 'Accounts',
        city : 'Hyderabad',
        email : 'ragh@mdo.com'
      },
      {
        employee_id : 4,
        first_name : 'Dudi',
        last_name : 'Aishwarya',
        dept : 'Tester',
        city : 'Hyderabad',
        email : 'aishu@mdo.com'
      },
      {
        employee_id : 5,
        first_name : 'Dudi',
        last_name : 'Aishwarya',
        dept : 'Tester',
        city : 'Hyderabad',
        email : 'aishu@mdo.com'
      },
      {
        employee_id : 6,
        first_name : 'Dudi',
        last_name : 'Aishwarya',
        dept : 'Tester',
        city : 'Hyderabad',
        email : 'aishu@mdo.com'
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
