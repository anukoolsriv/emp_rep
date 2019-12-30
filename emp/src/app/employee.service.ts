import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:Employee[] = new Array();

  constructor() {
    this.employees[0] = new Employee(101,"Robert Downey Jr", 50000);
    this.employees[1] = new Employee(102,"Chris Pratt", 100);
    this.employees[2] = new Employee(103,"Elizabeth Oslen", 10000);
    this.employees[3] = new Employee(104,"Scarlett Johannsson", 20000);
  }
findAllEmployees():Employee[]{
  return this.employees;
}

}
