import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';

@NgModule({
  declarations: [EmployeeManagementComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
