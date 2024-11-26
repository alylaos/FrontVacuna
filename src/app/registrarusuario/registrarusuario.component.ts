import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { RegistrarUsuarioService } from '../services/registrarusuario.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarusuario',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatInputModule,
    FormsModule, MatFormFieldModule,MatButtonModule, MatSortModule, MatIconModule
  ],
  templateUrl: './registrarusuario.component.html',
  styleUrls: ['./registrarusuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
 

  usuario: Usuario = new Usuario();

  constructor(private registrarusuarioService: RegistrarUsuarioService, private router: Router) {}

  ngOnInit(): void {
  
  }

save(){
      console.log("Registrando un usuario.");
      this.registrarusuarioService.crearRegistrarUsuario(this.usuario).subscribe(
        data => this.router.navigate(['/citas'])
      );
      console.log("continuamos con la navegación.");
    }
    

}
