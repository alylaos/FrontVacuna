import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacunaService {
  private baseUrl = 'http://localhost:8090/api/vacunas';

  constructor(private http: HttpClient) {}

  obtenerTodasLasVacunas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  crearVacuna(vacuna: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, vacuna);
  }

  eliminarVacuna(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
