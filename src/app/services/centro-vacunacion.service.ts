import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CentroVacunacion {
  idCentro: number;
  nombrecentro: string;
  direccion: string;
  telefono: string;
  tipo_vacuna: string;
  latitud: number;
  longitud: number;
}

@Injectable({
  providedIn: 'root',
})
export class CentroVacunacionService {
  private apiUrl = 'http://localhost:8090/api/centrovacunacion'; // URL de tu API

  constructor(private http: HttpClient) {}

  getCentrosVacunacion(): Observable<CentroVacunacion[]> {
    return this.http.get<CentroVacunacion[]>(this.apiUrl);
  }
}
