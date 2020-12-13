import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Router} from '@angular/router';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Usuarios: any[] = [];
  private query: QueryRef<any>;
  usuario: string = ""
  password: string  = ""
  constructor(private apollo:Apollo, private router : Router) {
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

  Ingresar() {
    let a = false;
    this.Usuarios.forEach(user => {
      if(user.usuario === this.usuario && user.password === this.password)
        a = true;
    });
    if(a)
    {
      alert("Ingreso exitoso!");
      window.localStorage.setItem("auth","true")
      window.location.reload();

      console.log(window.localStorage.getItem("auth"));
    }
    else
    {
      alert("Nombre de usuario y/o contraseña incorrectos!");
      window.location.reload();
    }
  }
}
