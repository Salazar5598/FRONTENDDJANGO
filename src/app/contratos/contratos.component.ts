import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const Contratos_QUERY = gql`
query{
  contratos{
    costo
    fecha
    clientes{
      nombre
      apellido
      email
      telefono
    }
    servicios{
      servicio
    }
  }
}
`

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  Contratos: any[] =[];
  private query: QueryRef<any>;

  constructor(private apollo: Apollo){
    this.query = this.apollo.watchQuery({
      query: Contratos_QUERY
    });
    this.query.valueChanges.subscribe(result =>{
      this.Contratos = result.data && result.data.contratos;
      console.log(this.Contratos);
    });
  }

  ngOnInit(): void {
  }

}
