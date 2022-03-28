import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaginacionService {

  constructor(private httpClient:HttpClient) { }

  listarFavoritos():Observable<any>{
    return this.httpClient.get("http://localhost:3000/favorites");
  }

  listarPersonajes():Observable<any>{
    return this.httpClient.get("http://localhost:3000/people");
  }

  listarPersonajesFiltrados(name: string, gender: string):Observable<any>{
    return this.httpClient.get("http://localhost:3000/people?name=" + name + "&gender=" +gender);
  }
}
