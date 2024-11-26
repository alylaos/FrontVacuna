import { Component,OnInit  } from '@angular/core';
import { CitaService, CitaMedica } from '../services/cita.service';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule,
    MatInputModule, FormsModule,MatFormFieldModule, MatSortModule, MatIconModule
  ],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})

export class CitasComponent implements OnInit {
  citas: CitaMedica[] = [];
  citaForm: FormGroup;

  constructor(private citaService: CitaService, private fb: FormBuilder) {
    this.citaForm = this.fb.group({
      tipoVacuna: ['', Validators.required],
      fechaVacunacion: ['', Validators.required],
      dosis: [1, [Validators.required, Validators.min(1)]],
      sede: ['', Validators.required],
      estado: ['Pendiente', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  // Obtener la lista de citas
  obtenerCitas(): void {
    this.citaService.obtenerCitas().subscribe(
      (data) => {
        this.citas = data;
      },
      (error) => {
        console.error('Error al obtener las citas:', error);
      }
    );
  }

  // Registrar una nueva cita
  registrarCita(): void {
    if (this.citaForm.valid) {
      const nuevaCita: CitaMedica = this.citaForm.value;
      this.citaService.registrarCita(nuevaCita).subscribe(
        (respuesta) => {
          console.log('Cita registrada con éxito:', respuesta);
          this.citaForm.reset({ estado: 'Pendiente', dosis: 1 }); // Limpiar formulario
          this.obtenerCitas(); // Actualizar la lista de citas
        },
        (error) => {
          console.error('Error al registrar la cita:', error);
        }
      );
    }
  }
}