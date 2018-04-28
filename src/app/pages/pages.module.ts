import { NgModule } from '@angular/core';

// Componentes
import { DashnoardComponent } from './dashnoard/dashnoard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';


// Modulos
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// modulo que tiene referencia a las paginas principales

@NgModule({
    declarations: [
        PagesComponent,
   DashnoardComponent,
    ProgressComponent,
   Graficas1Component
    ],
    exports: [
        DashnoardComponent,
        ProgressComponent,
        Graficas1Component
         ],

    imports: [
        SharedModule,
        PAGES_ROUTES
    ],

})

export class PagesModule { }
