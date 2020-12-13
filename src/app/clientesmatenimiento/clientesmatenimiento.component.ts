import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

import { ActivatedRoute } from '@angular/router';

const Cliente_Query = gql`
query ($id: Int!){
  cliente(id: $id){
    id
    nombre
    apellido
    edad
    email
    telefono
  }
}
`;

const Cliente_Update_Query = gql `
  mutation Cliente_Update_Query(
    $id: Int!
    $nombre: String!
    $apellido: String!
    $edad: Int!
    $email: String!
    $telefono: String!
  ){
    updateCliente(id: $id, input: {
      nombre: $nombre
      apellido: $apellido
      edad: $edad
      email: $email
      telefono: $telefono
    }){
      ok
    }
  }
`;

const Cliente_Insert_Query = gql`
mutation Cliente_Insert_Query(
  $nombre: String!
  $apellido: String!
  $edad: Int!
  $email: String!
  $telefono: String!
){
  createCliente(input: {
    nombre: $nombre
    apellido: $apellido
    edad: $edad
    email: $email
    telefono: $telefono
  }){
    ok
  }
}
`;

@Component({
  selector: 'app-clientesmatenimiento',
  templateUrl: './clientesmatenimiento.component.html',
  styleUrls: ['./clientesmatenimiento.component.css']
})
export class ClientesmatenimientoComponent implements OnInit {

  id: any;
  edit: boolean = false;
  icono: String = "send";
  elCliente: any = [];
  private query: any;

  nombre: string = ""
  apellido: string  = ""
  edad: number = 0
  telefono: string = ""
  email: string  = ""

  constructor(private apollo: Apollo, private activateRoute: ActivatedRoute){
    this.id = this.activateRoute.snapshot.params['id'];
      if(this.id){
        this.edit = true;
        this.icono = "create";
        //select por id

        this.query = this.apollo.watchQuery<any>({
          query: Cliente_Query,
          variables: {
            id: this.id,
          }
        }).valueChanges.subscribe( result => {
          this.elCliente = result.data && result.data.cliente;
          this.nombre = this.elCliente["nombre"]
          this.apellido = this.elCliente["apellido"]
          this.edad = this.elCliente["edad"]
          this.telefono = this.elCliente["telefono"]
          this.email = this.elCliente["email"]
        })

        // hasta aqui
      }else{
        this.edit = false;
        this.icono = "send";
      }
  }

  ngOnInit(): void {}

  Insertar(){
    (this.nombre == "")? console.log("vacio") : this.edit? this.actualizar() : this.crear() ;
  }

  actualizar(){
    this.apollo.mutate({
      mutation: Cliente_Update_Query,
      variables: {
        id: this.id,
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        email: this.email,
        telefono: this.telefono
      }
    }).subscribe(( data ) => {
      console.log(data)
        console.log(data)
        alert("Actualizado")
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  crear(){
    this.apollo.mutate({
      mutation: Cliente_Insert_Query,
      variables: {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        email: this.email,
        telefono: this.telefono
      }
    }).subscribe(( data ) => {
      console.log(data)
        console.log(data)
        alert("Ingresado")
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
