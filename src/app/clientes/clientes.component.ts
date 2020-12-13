import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const Clientes_QUERY = gql`
  query {
    clientes{
      id
      nombre
      apellido
      edad
      email
      telefono
    }
  }
`;


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  Clientes: any[] =[];
  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {
    this.query = this.apollo.watchQuery({
      query: Clientes_QUERY
    });
    this.query.valueChanges.subscribe(result =>{
      this.Clientes = result.data && result.data.clientes;
      console.log(this.Clientes);
    });
   }

  ngOnInit(): void {}

}
