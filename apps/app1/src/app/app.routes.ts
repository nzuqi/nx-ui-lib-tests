import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'ui/:component',
        loadComponent: () => import('./details/details.component').then(c => c.DetailsComponent),
    },
    {
        path: '**',
        redirectTo: 'ui/intro',
    }
];
