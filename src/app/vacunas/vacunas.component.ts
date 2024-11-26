import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { VacunaService } from '../services/vacuna.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-vacunas',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatInputModule,
    FormsModule, MatFormFieldModule,MatButtonModule, MatSortModule, MatIconModule
  ],
  templateUrl: './vacunas.component.html',
  styleUrls: ['./vacunas.component.css']
})
export class VacunasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'dosis_necesarias', 'intervalo_dosis'];
  dataSource = new MatTableDataSource<any>();
  nuevaVacuna = { nombre: '', descripcion: '' };

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private vacunaService: VacunaService) {}

  ngOnInit(): void {
    this.obtenerVacunas();
  }

  obtenerVacunas(): void {
    this.vacunaService.obtenerTodasLasVacunas().subscribe(
      (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => console.error('Error al obtener las vacunas', error)
    );
  }

  agregarVacuna(): void {
    this.vacunaService.crearVacuna(this.nuevaVacuna).subscribe(
      (response) => {
        console.log('Vacuna agregada con éxito:', response);
        this.nuevaVacuna = { nombre: '', descripcion: '' };
        this.obtenerVacunas(); // Actualizar la lista
      },
      (error) => console.error('Error al agregar vacuna', error)
    );
  }

  eliminarVacuna(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta vacuna?')) {
      this.vacunaService.eliminarVacuna(id).subscribe(
        () => {
          console.log('Vacuna eliminada con éxito');
          this.obtenerVacunas(); // Actualizar la lista
        },
        (error) => console.error('Error al eliminar vacuna', error)
      );
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
