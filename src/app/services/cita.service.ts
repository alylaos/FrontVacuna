import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CitaMedica {
  id?: number;
  tipoVacuna: string;
  fechaVacunacion: Date;
  dosis: number;
  sede: string;
  estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  private baseUrl = 'http://localhost:8090/api/citas';

  constructor(private http: HttpClient) {}

  // Obtener todas las citas
  obtenerCitas(): Observable<CitaMedica[]> {
    return this.http.get<CitaMedica[]>(this.baseUrl);
  }

  // Registrar una cita
  registrarCita(cita: CitaMedica): Observable<CitaMedica> {
    return this.http.post<CitaMedica>(`${this.baseUrl}/registrar`, cita);
  }
}
