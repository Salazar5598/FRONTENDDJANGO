import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServiciosmantenimientoComponent } from './serviciosmantenimiento/serviciosmantenimiento.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesmatenimientoComponent } from './clientesmatenimiento/clientesmatenimiento.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ContratosmantenimientoComponent } from './contratosmantenimiento/contratosmantenimiento.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'serviciosmant',
    component: ServiciosmantenimientoComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'clientesmant',
    component: ClientesmatenimientoComponent
  },
  {
    path: 'clientesmant/:id',
    component: ClientesmatenimientoComponent
  },
  {
    path: 'contratos',
    component: ContratosComponent
  },
  {
    path: 'contratosmnat',
    component: ContratosmantenimientoComponent
  },
  {
    path: 'contratosmnat/:id',
    component: ContratosmantenimientoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
