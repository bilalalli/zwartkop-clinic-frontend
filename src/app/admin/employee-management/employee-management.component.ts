import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/shared/services/api.service';

interface IEmployee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
}
@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss'],
})
export class EmployeeManagementComponent implements OnInit {
  public employees: IEmployee[] | undefined;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees() {
    this.api.get('https://localhost:7191/Pizza').subscribe((response: any) => {
      this.employees = response.data;
      console.log(this.employees);
    });
  }
}
