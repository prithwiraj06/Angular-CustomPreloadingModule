import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CustompreloadingService } from '../custom-preloading/custom-preloading.service';
const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},    
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'employees', data: {preload: true}, loadChildren: '../employee/module/employee.module#EmployeeModule'},
    {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: CustompreloadingService})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
