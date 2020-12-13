import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServiciosmantenimientoComponent } from './serviciosmantenimiento/serviciosmantenimiento.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
