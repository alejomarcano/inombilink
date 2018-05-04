import { NgModule } from '@angular/core';


// Componentes
import { DashnoardComponent } from './dashnoard/dashnoard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';


// Modulos
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Grafica
import { ChartsModule } from 'ng2-charts';



// Temporal
import { IncrementadorComponent } from '../comporeutilizados/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../comporeutilizados/grafico-dona/grafico-dona.component';


// modulo que tiene referencia a las paginas principales

@NgModule({
    declarations: [
        PagesComponent,
   DashnoardComponent,
    ProgressComponent,
   Graficas1Component,
   IncrementadorComponent,
   GraficoDonaComponent
    ],
    exports: [
        DashnoardComponent,
        ProgressComponent,
        Graficas1Component
         ],

    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule

    ],

})

export class PagesModule { }
