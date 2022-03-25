import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from'@angular/common/http';
import { PrincipalService } from './servicio/principal.service';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PaginacionComponent } from './paginacion/paginacion.component';

const routes: Routes = [
  {path: '', redirectTo: '/favoritos', pathMatch: 'full'},
  {path:'favoritos', component: FavoritosComponent},
  {path:'busqueda', component: BusquedaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FavoritosComponent,
    BusquedaComponent,
    PrincipalComponent,
    PaginacionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [PrincipalService],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
