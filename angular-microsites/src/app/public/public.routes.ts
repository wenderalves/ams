import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.PublicHomeComponent)
    },
    {
        path: 'como-funciona',
        pathMatch: 'full',
        loadComponent: () => import('./pages/como-funciona/como-funciona.component')
            .then(m => m.ComoFuncionaComponent)
    },
];