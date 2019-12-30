import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[] = new Array();
  // private services:EmployeeService;
  // constructor(services:EmployeeService) {
  //   this.services = services;
  //  }
  // equivalent to above
  constructor(private service:EmployeeService) { }

  ngOnInit() {
    this.employees = this.service.findAllEmployees();
  }

}
