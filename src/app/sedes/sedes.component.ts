import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-sedes',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatInputModule],
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {
  displayedColumns: string[] = ['idCentro', 'nombrecentro', 'direccion', 'telefono', 'tipo_vacuna', 'estado'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8090/api/centrovacunacion').subscribe(
      (data) => {
        // Inicializa el dataSource y asocia el paginador y ordenación
        this.dataSource = new MatTableDataSource(data);
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
        if (this.sort) {
          this.dataSource.sort = this.sort;
        }
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getEstadoTexto(estado: number): string {
    return estado === 1 ? 'Activo' : 'Inactivo';
  }

}
