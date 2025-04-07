import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerFormComponent } from './customers/customer-form/customer-form.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { CustomerDashboardComponent } from './customers/customer-dashboard/customer-dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' },
    { path: 'customers', component: CustomerDashboardComponent },
    { path: 'customerlist', component: CustomerListComponent },
    { path: 'customers/new', component: CustomerFormComponent },
    { path: 'customers/:id', component: CustomerDetailComponent }
];
