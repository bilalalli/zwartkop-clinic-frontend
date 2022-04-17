import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';

const routes: Routes = [
  { path: 'employee-management', component: EmployeeManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
