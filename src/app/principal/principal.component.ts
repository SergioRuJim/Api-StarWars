import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../servicio/principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuario: any;
  page: number = 1;
  pageSize: number = 2;
  
  constructor(private principalService: PrincipalService) { 
    this.listarUsuario();
  }

  ngOnInit(): void {
  }

  listarUsuario(){
    this.principalService.listarUsuario().subscribe({
      next: (r) => this.usuario = r,
      error: (e) => console.log(JSON.stringify(e))
    });
  }

}
