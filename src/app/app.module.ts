import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from'@angular/common/http';
import { PrincipalService } from './servicio/principal.service';
import { PaginacionService } from './servicio/paginacion.service';
import {NgxPaginationModule} from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [PrincipalService, PaginacionService],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}