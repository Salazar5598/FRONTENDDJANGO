import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServiciosmantenimientoComponent } from './serviciosmantenimiento/serviciosmantenimiento.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesmatenimientoComponent } from './clientesmatenimiento/clientesmatenimiento.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ContratosmantenimientoComponent } from './contratosmantenimiento/contratosmantenimiento.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosmantenimientoComponent } from './usuariosmantenimiento/usuariosmantenimiento.component';
import { ContactoComponent} from './contacto/contacto.component';

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
    path: 'serviciosmant/:id',
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
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path : 'usuariosmnat',
    component : UsuariosmantenimientoComponent
  },
  {
    path : 'usuariosmnat/:id',
    component : UsuariosmantenimientoComponent
  },
  {
    path : 'contacto',
    component : ContactoComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
