import { NgModule } from '@angular/core';
import { NopagefoundComponent } from '../pages/nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';


// modulo que tiene todas las paginas compartidas a lo largo de la aplicacion
@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent

    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent
         ],

})

export class SharedModule { }
