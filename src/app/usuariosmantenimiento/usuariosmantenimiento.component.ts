import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
const Usuario_Query = gql`
query ($id: Int!){
  usuario(id: $id){
    id
    usuario
    password
  }
}
`;

const Usuario_Update_Query = gql `
  mutation Usuario_Update_Query(
    $id: Int!
    $usuario: String!
    $password: String!
  ){
    updateUsuario(id: $id, input: {
      usuario: $usuario
      password: $password
    }){
      ok
    }
  }
`;

const Usuario_Insert_Query = gql`
mutation Usuario_Insert_Query(
  $usuario: String!
  $password: String!
){
  createUsuario(input: {
    usuario: $usuario
    password: $password
  }){
    ok
  }
}
`;
@Component({
  selector: 'app-usuariosmantenimiento',
  templateUrl: './usuariosmantenimiento.component.html',
  styleUrls: ['./usuariosmantenimiento.component.css']
})
export class UsuariosmantenimientoComponent implements OnInit {
  id: any;
  edit: boolean = false;
  icono: String = "send";
  elUsuario: any = [];
  private query: any;

  usuario: string = ""
  password: string  = ""
  constructor(private apollo: Apollo, private activateRoute: ActivatedRoute){
    this.id = this.activateRoute.snapshot.params['id'];
      if(this.id){
        this.edit = true;
        this.icono = "create";
        //select por id

        this.query = this.apollo.watchQuery<any>({
          query: Usuario_Query,
          variables: {
            id: this.id,
          }
        }).valueChanges.subscribe( result => {
          this.elUsuario = result.data && result.data.usuario;
          this.usuario = this.elUsuario["usuario"]
          this.password = this.elUsuario["password"]
        })

        // hasta aqui
      }else{
        this.edit = false;
        this.icono = "send";
      }
  }

  ngOnInit(): void {
  }

  Insertar(){
    (this.usuario == "")? console.log("vacio") : this.edit? this.actualizar() : this.crear() ;
  }

  actualizar(){
    this.apollo.mutate({
      mutation: Usuario_Update_Query,
      variables: {
        id: this.id,
        usuario: this.usuario,
        password: this.password,
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
      mutation: Usuario_Insert_Query,
      variables: {
        usuario: this.usuario,
        password: this.password
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