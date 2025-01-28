import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home.components').then(m => m.HomeComponent)
    },
    {
        path: 'regimento',
        loadComponent: () => import('./pages/regimento.component').then(m => m.RegimentoComponent)
    }
];
