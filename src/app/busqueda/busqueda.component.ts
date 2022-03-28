import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginacionComponent } from '../paginacion/paginacion.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('selector1') selector1!: PaginacionComponent;

  generos:string[] = ["","male", 'female', 'n/a'];
  seleccionado: string = "";
  nombre: string = "";
  formBusqueda: FormGroup = new FormGroup({
    nombre : new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  filtrarPersonajes(){
    this.selector1.listarPersonajesFiltrados(this.formBusqueda.value.nombre,this.seleccionado);
  }

  limpiarPersonajes(){
    this.selector1.listarPersonajes();
    this.formBusqueda = new FormGroup({
      nombre : new FormControl('', Validators.required)
    })
    this.seleccionado = ""
  }

  get f(){
    return this.formBusqueda.controls;
  }
}
