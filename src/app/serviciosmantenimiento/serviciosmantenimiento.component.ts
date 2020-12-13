import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

import { ActivatedRoute } from '@angular/router';
const Servicio_Query = gql`
query ($id: Int!){
  servicio(id: $id){
    id
    servicio
    descripcion
  }
}
`;

const Servicio_Update_Query = gql `
  mutation Servicio_Update_Query(
    $id: Int!
    $servicio: String!
    $descripcion: String!
  ){
    updateServicio(id: $id, input: {
      servicio: $servicio
      descripcion: $descripcion
    }){
      ok
    }
  }
`;

const Servicio_Insert_Query = gql`
mutation Servicio_Insert_Query(
  $servicio: String!
  $descripcion: String!
){
  createServicio(input: {
    servicio: $servicio
    descripcion: $descripcion
  }){
    ok
  }
}
`;
@Component({
  selector: 'app-serviciosmantenimiento',
  templateUrl: './serviciosmantenimiento.component.html',
  styleUrls: ['./serviciosmantenimiento.component.css']
})
export class ServiciosmantenimientoComponent implements OnInit {
  id: any;
  edit: boolean = false;
  icono: String = "send";
  elServicio: any = [];
  private query: any;

  servicio: string = ""
  descripcion: string  = ""
  constructor(private apollo: Apollo, private activateRoute: ActivatedRoute){
    this.id = this.activateRoute.snapshot.params['id'];
      if(this.id){
        this.edit = true;
        this.icono = "create";
        //select por id

        this.query = this.apollo.watchQuery<any>({
          query: Servicio_Query,
          variables: {
            id: this.id,
          }
        }).valueChanges.subscribe( result => {
          this.elServicio = result.data && result.data.servicio;
          this.servicio = this.elServicio["servicio"]
          this.descripcion = this.elServicio["descripcion"]
        })

        // hasta aqui
      }else{
        this.edit = false;
        this.icono = "send";
      }
  }

  ngOnInit(): void {}

  Insertar(){
    (this.servicio == "")? console.log("vacio") : this.edit? this.actualizar() : this.crear() ;
  }

  actualizar(){
    this.apollo.mutate({
      mutation: Servicio_Update_Query,
      variables: {
        id: this.id,
        servicio: this.servicio,
        descripcion: this.descripcion,
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
      mutation: Servicio_Insert_Query,
      variables: {
        servicio: this.servicio,
        descripcion: this.descripcion
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
