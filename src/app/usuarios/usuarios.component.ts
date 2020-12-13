import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const Usuarios_Query = gql`
query {
  usuarios{
    id
    usuario
    password
  }
}
`;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  Usuarios: any[] = [];
  private query: QueryRef<any>;
  
  constructor(private apollo:Apollo) {
    this.query = this.apollo.watchQuery({
      query: Usuarios_Query
    });
    this.query.valueChanges.subscribe(result =>{
      this.Usuarios = result.data && result.data.usuarios;
      console.log(this.Usuarios)
    })
  }
  ngOnInit(): void {
  }

}