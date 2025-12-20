import { Routes } from '@angular/router';
import { Login } from './components/login/login'
import { Registration } from './components/registration/registration'


export const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'registration', component: Registration }
];
