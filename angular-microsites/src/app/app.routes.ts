import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.routes').then(m => m.routes),
    },
    {
        path: 'client/:client',
        loadChildren: () => import('./client/client.rotes').then(m => m.routes),
    },
    {
        path: '',
        loadChildren: () => import('./public/public.routes').then(m => m.routes),
    },
];
