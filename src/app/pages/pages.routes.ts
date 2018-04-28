
import { RouterModule, Routes } from '@angular/router';


import { PagesComponent } from './pages.component';
import { DashnoardComponent } from './dashnoard/dashnoard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';




const pagesRoutes: Routes = [
    {
        path: '',
    component: PagesComponent,
    children: [
        {path: 'principal', component: DashnoardComponent },
        {path: 'progress', component: ProgressComponent },
        {path: 'graficas1', component: Graficas1Component },
        {path: '', redirectTo: '/principal', pathMatch: 'full' },
    ]

    },

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
