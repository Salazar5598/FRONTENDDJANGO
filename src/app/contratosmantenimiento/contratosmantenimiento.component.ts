import { Component, OnInit } from '@angular/core';

import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

import { ActivatedRoute } from '@angular/router';

const Contrato_Query = gql`
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

@Component({
  selector: 'app-contratosmantenimiento',
  templateUrl: './contratosmantenimiento.component.html',
  styleUrls: ['./contratosmantenimiento.component.css']
})
export class ContratosmantenimientoComponent implements OnInit {

  costo: number = 0;
  fecha: string = ""
  icono: string = "add"

  constructor() { }

  ngOnInit(): void {}

  Insertar(){}

}
