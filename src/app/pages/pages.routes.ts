
import { RouterModule, Routes } from '@angular/router';


import { PagesComponent } from './pages.component';
import { DashnoardComponent } from './dashnoard/dashnoard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { InmuebleComponent } from './inmueble/inmueble.component';

    // Primera Entrega
import { AmigosComponent } from './amigos/amigos.component';
import { InmueblesvendidosComponent } from './inmueblesvendidos/inmueblesvendidos.component';
import { RegistrocompradorComponent } from './registrocomprador/registrocomprador.component';
import { RegistroduenoComponent } from './registrodueno/registrodueno.component';
import { RegistroinmuebleComponent } from './registroinmueble/registroinmueble.component';
import { VistaclientesComponent } from './vistaclientes/vistaclientes.component';
import { VistacompradoresComponent } from './vistacompradores/vistacompradores.component';
import { VistamisinmueblesComponent } from './vistamisinmuebles/vistamisinmuebles.component';
import { MarcadosComponent } from './marcados/marcados.component';




const pagesRoutes: Routes = [
    {
        path: '',
    component: PagesComponent,
    children: [
        {path: 'principal', component: DashnoardComponent },
        {path: 'progress', component: ProgressComponent },
        {path: 'graficas1', component: Graficas1Component },
        {path: 'settingscuenta', component: AccoutSettingsComponent },

        // Primera Entrega
        {path: 'inmueble', component: InmuebleComponent},
        {path: 'amigos', component: AmigosComponent},
        {path: 'inmueblesvendidos', component: InmueblesvendidosComponent},
        {path: 'marcados', component: MarcadosComponent},
        {path: 'registrocomprador', component: RegistrocompradorComponent},
        {path: 'registrodueno', component: RegistroduenoComponent},
        {path: 'registroinmueble', component: RegistroinmuebleComponent},
        {path: 'vistaclientes', component: VistaclientesComponent},
        {path: 'vistacompradores', component: VistacompradoresComponent},
        {path: 'vistamisinmuebles', component: VistamisinmueblesComponent},




        {path: '', redirectTo: '/principal', pathMatch: 'full' },
    ]

    },

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
