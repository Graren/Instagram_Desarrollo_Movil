import { Component } from '@angular/core';

/**
 * Generated class for the LoginCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-card',
  templateUrl: 'login-card.html'
})
export class LoginCardComponent {

  text: string;
  pa: string;
  name: string;
  data : {name : string, password : string} = {
    name : "",
    password : "",
  }

  setName = (name) => {
    this.data.name = name;
    console.log(name);
  }

  setPass = (pass) => {
    this.data.password = pass;
    console.log(pass);
  }

  onSignUp($e : any){
    console.log($e)
  }

  onLogin($e: any){
    console.log($e)
  }

  constructor() {
    console.log('Hello LoginCardComponent Component');
    this.text = 'Hello World';
    this.pa = "password";
    this.data.name = "";
  }

}
