import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { response } from 'express';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {


  private baseUrl = 'http://localhost:8090/api/usuarios';
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) {}


  crearRegistrarUsuario(usuario: Object): Observable<Object>{
    return this.http.post(this.baseUrl + "/registrarusuario", usuario, {headers:this.httpHeaders})
  }


}
