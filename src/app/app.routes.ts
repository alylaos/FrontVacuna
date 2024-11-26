import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListMaterialComponent } from './product-list-material/product-list-material.component';
import { ClienteComponent } from './cliente/cliente.component';
import { SedesComponent } from './sedes/sedes.component';
import { RecordatorioComponent } from './recordatorio/recordatorio.component';
import { VacunasComponent } from './vacunas/vacunas.component';
import { CitasComponent } from './citas/citas.component';
import { RegistrarUsuarioComponent } from './registrarusuario/registrarusuario.component';
import { RegistrarCitasComponent } from './registrar-citas/registrar-citas.component';


export const routes: Routes = [
    {path: "list", component: ProductListComponent},
    {path: "material", component: ProductListMaterialComponent},
    { path: "registrar-citas", component: RegistrarCitasComponent },
    {path: "home", component: HomeProductComponent},
    {path: "cliente", component: ClienteComponent},
    { path: "sedes", component: SedesComponent },
    { path: "recordatorio", component: RecordatorioComponent },
    { path: "vacunas", component: VacunasComponent },
    { path: "citas", component: CitasComponent },
    { path: "registrarusuario", component: RegistrarUsuarioComponent },
    {path: '', redirectTo: '/home', pathMatch: "full"},
    {path: '**', component: PageNotFoundComponent},

];
