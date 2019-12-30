export class Employee {
    employeeId:number;
    employeeName:string;
    employeeSalary:number;

    constructor(employeeId:number, employeeName:string, employeeSalary:number){
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
    }
    
    toString():string{
        return "Employee Id: " + this.employeeId 
        + ", Employee Name: " + this.employeeName 
        + ", Employee Salary: " + this.employeeSalary;
    }
}
