import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {path: '', component: RegisterComponent},
    {path: 'list', component: ListComponent}
];
