import { Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';

export const routes: Routes = [
    {
        path: '',
        component: TemplateComponent,
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard',
            }
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login.component').then(m => m.LoginComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    }
];