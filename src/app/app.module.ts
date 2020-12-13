import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FormsModule } from '@angular/forms';
import { ServiciosmantenimientoComponent } from './serviciosmantenimiento/serviciosmantenimiento.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesmatenimientoComponent } from './clientesmatenimiento/clientesmatenimiento.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ContratosmantenimientoComponent } from './contratosmantenimiento/contratosmantenimiento.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosmantenimientoComponent } from './usuariosmantenimiento/usuariosmantenimiento.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServiciosComponent,
    ServiciosmantenimientoComponent,
    ClientesComponent,
    ClientesmatenimientoComponent,
    ContratosComponent,
    ContratosmantenimientoComponent,
    InicioComponent,
    UsuariosComponent,
    UsuariosmantenimientoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
