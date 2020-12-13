import { Component, OnInit } from '@angular/core';

import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

import { ActivatedRoute } from '@angular/router';

const Clientes_QUERY = gql`
  query {
    clientes{
      id
      nombre
      apellido
    }
  }
`;

const Servicios_QUERY = gql`
  query {
    servicios{
      id
      servicio
    }
  }
`;

const Contrato_Query = gql`
query ($id: Int!){
  contrato (id: $id){
    costo
    fecha
    clientes{
      id
      nombre
      apellido
      email
      telefono
    }
    servicios{
      id
      servicio
    }
  }
}
`;

const Contrato_Insert_Query = gql`
mutation Contrato_Insert_Query(
  $costo: Int!
  $fecha: String!
  $id_cliente: ID!
  $id_servicio: ID!
){
  createContrato(input: {
    costo: $costo,
    fecha: $fecha,
    clientes: {id: $id_cliente },
    servicios: {id: $id_servicio }
  }){
		ok
  }
}
`;

const Contrato_Update_Query = gql`
mutation Contrato_Update_Query(
  $id: Int!
  $costo: Int!
  $fecha: String!
  $id_cliente: ID!
  $id_servicios: ID!
){
  updateContrato(id: $id, input: {
    costo: $costo,
    fecha: $fecha,
    clientes: {id: $id_cliente },
    servicios: {id: $id_servicios }
  }){
		ok
  }
}
`;

@Component({
  selector: 'app-contratosmantenimiento',
  templateUrl: './contratosmantenimiento.component.html',
  styleUrls: ['./contratosmantenimiento.component.css']
})
export class ContratosmantenimientoComponent implements OnInit {

  id: any;
  edit: boolean = false;
  icono: string = "send";
  elContrato: any = [];
  private query: any;

  costo: number = 0;
  fecha: string = "";
  id_cliente: number = 0;
  id_servicio: number = 0;

  Cliente: any = []
  Servicio: any = []


  constructor(private apollo: Apollo, private activateRoute: ActivatedRoute){

    //////////////////////////////////
    this.query = this.apollo.watchQuery<any>({
      query: Clientes_QUERY
    }).valueChanges.subscribe(result =>{
      this.Cliente = result.data && result.data.clientes;
      console.log(this.Cliente);
    });
    ////////////////////////////////////////////////////////////////////
    this.query = this.apollo.watchQuery<any>({
      query: Servicios_QUERY
    }).valueChanges.subscribe(result =>{
      this.Servicio = result.data && result.data.servicios;
      console.log(this.Servicio);
    });
    //////////////////////////////////


    this.id = this.activateRoute.snapshot.params['id'];
    if(this.id){
      console.log("aqui")
      this.edit = true;
      this.icono = "create";
      //select por id

      this.query = this.apollo.watchQuery<any>({
        query: Contrato_Query,
        variables: {
          id: this.id,
        }
      }).valueChanges.subscribe( result => {
        this.elContrato = result.data && result.data.contrato;
        this.costo = this.elContrato["costo"]
        this.fecha = this.elContrato["fecha"]
        this.id_cliente = this.elContrato["clientes"]["id"]
        this.id_servicio = this.elContrato["servicios"]["id"]
      })
         // hasta aqui
      }else{
        console.log("all")
        this.edit = false;
        this.icono = "send";
      }
  }

  ngOnInit(): void {}

  Insertar(){
    (this.fecha == "")? console.log("Vacio"): this.edit? this.actualizar() : this.crear()
  }

  actualizar(){
    this.apollo.mutate({
      mutation: Contrato_Update_Query,
      variables: {
        id: this.id,
        costo: this.costo,
        fecha: this.fecha,
        id_cliente: this.id_cliente,
        id_servicios: this.id_servicio
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
      mutation: Contrato_Insert_Query,
      variables: {
        costo: this.costo,
        fecha: this.fecha,
        id_cliente: this.id_cliente,
        id_servicio: this.id_servicio
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
