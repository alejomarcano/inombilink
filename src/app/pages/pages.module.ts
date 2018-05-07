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

import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

// Temporal
import { IncrementadorComponent } from '../comporeutilizados/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../comporeutilizados/grafico-dona/grafico-dona.component';
import { AmigosComponent } from './amigos/amigos.component';
import { InmuebleComponent } from './inmueble/inmueble.component';
import { InmueblesvendidosComponent } from './inmueblesvendidos/inmueblesvendidos.component';
import { MarcadosComponent } from './marcados/marcados.component';
import { RegistrocompradorComponent } from './registrocomprador/registrocomprador.component';
import { RegistroduenoComponent } from './registrodueno/registrodueno.component';
import { RegistroinmuebleComponent } from './registroinmueble/registroinmueble.component';
import { VistamisinmueblesComponent } from './vistamisinmuebles/vistamisinmuebles.component';
import { VistaclientesComponent } from './vistaclientes/vistaclientes.component';
import { VistacompradoresComponent } from './vistacompradores/vistacompradores.component';



// modulo que tiene referencia a las paginas principales

@NgModule({
    declarations: [
    PagesComponent,
   DashnoardComponent,
    ProgressComponent,
   Graficas1Component,
   IncrementadorComponent,
   GraficoDonaComponent,
   AccoutSettingsComponent,

   // Paginas primera entrega

   AmigosComponent,
   InmuebleComponent,
   InmueblesvendidosComponent,
   MarcadosComponent,
   RegistrocompradorComponent,
   RegistroduenoComponent,
   RegistroinmuebleComponent,
   VistamisinmueblesComponent,
   VistaclientesComponent,
   VistacompradoresComponent

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
