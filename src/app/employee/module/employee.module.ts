import {NgModule} from '@angular/core';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';
import { EmployeeRoutingModule } from '../employee-routing/employee-routing.module';
import { SharedModule } from 'src/app/SharedModule/shared.module';
@NgModule({
    declarations: [
        CreateEmployeeComponent,
        ListEmployeeComponent
    ],
    imports: [
        EmployeeRoutingModule,
        SharedModule
    ],
    exports: []
})
export class EmployeeModule {

}