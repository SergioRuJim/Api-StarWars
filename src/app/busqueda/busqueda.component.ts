import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginacionComponent } from '../paginacion/paginacion.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('selector1') selector1!: PaginacionComponent;

  generos:string[] = ["male", 'female', 'n/a'];
  seleccionado: string = "female";
  nombre: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  filtrarPersonajes(){
    this.selector1.listarPersonajesFiltrados(this.nombre,this.seleccionado);
  }

  limpiarPersonajes(){
    this.selector1.listarPersonajes();
    this.nombre = "";
    this.seleccionado = "female";
  }
}
