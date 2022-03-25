import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private httpClient:HttpClient) { }

  listarUsuario():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
}
