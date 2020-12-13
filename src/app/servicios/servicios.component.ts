import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const Servicios_Query = gql`
query {
  servicios{
    id
    servicio
    descripcion
  }
}
`;
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  Servicios: any[] =[];
  private query: QueryRef<any>;
  
  constructor(private apollo:Apollo) {
    this.query = this.apollo.watchQuery({
      query: Servicios_Query
    });
    this.query.valueChanges.subscribe(result =>{
      this.Servicios = result.data && result.data.servicios;
      console.log(this.Servicios)
    })
   }

  ngOnInit(): void {
  }

}
