import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontendAngular';
  isAuthenticated = false;
  constructor(private router : Router){
  }
  logout(){}
  login(){
    this.router.navigate(['']);
    console.log(window.localStorage.getItem("auth"))
  }
}
