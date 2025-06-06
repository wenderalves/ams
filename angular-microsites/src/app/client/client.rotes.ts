import { Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ErrorPageComponent } from './pages/erro.component';

const childrenPages: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/page.component').then(m => m.PageComponent)
    },
];

const sharedPage: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/shared.component').then(m => m.SharedComponent)
    }
];

export const routes: Routes = [
    {
        path: 'shared',
        component: TemplateComponent,
        loadChildren: () => sharedPage
    },
    {
        path: 'erro',
        pathMatch: 'full',
        component: ErrorPageComponent
    },
    {
        path: 'erro/:error',
        pathMatch: 'full',
        component: ErrorPageComponent,
    },
    {
        path: ':slug',
        component: TemplateComponent,
        loadChildren: () => childrenPages
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
