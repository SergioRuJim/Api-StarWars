import { Component, OnInit } from '@angular/core';
import { PaginacionService } from '../servicio/paginacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent implements OnInit {

  pageActual:number = 1;
  name: any;
  items: any;

  constructor(private route: ActivatedRoute, private router: Router,private paginacionService: PaginacionService) { 
    if(this.router.url == "/favoritos")
      this.listarFavoritos();
    else
      this.listarPersonajes();
  }

  ngOnInit(): void {
 
  }

  listarFavoritos(){
    this.paginacionService.listarFavoritos().subscribe({
      next: (r) => this.items = r,
      error: (e) => console.log(JSON.stringify(e))
    });
  }
  listarPersonajes(){
    this.paginacionService.listarPersonajes().subscribe({
      next: (r) => this.items = r,
      error: (e) => console.log(JSON.stringify(e))
    });
  }
}
