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
  auth: any = ""
  constructor(private router : Router){
    this.auth = window.localStorage.getItem('auth')
    if(this.auth == "true"){
      this.isAuthenticated = !this.isAuthenticated;
    }else{
      this.isAuthenticated = this.isAuthenticated;
    }
  }
  logout(){
    window.localStorage.setItem("auth", "false")
    this.router.navigate(['']);
  }

  login(){
    this.router.navigate(['']);
    console.log(window.localStorage.getItem("auth"))
  }
}
