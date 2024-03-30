import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: '../sign-up/sign-up.component.css',
  
})
export class SignInComponent {
  User:SignIn;
  constructor()
  {
    this.User=new SignIn();
  }

}

export class SignIn {
  Email:String;
  Password:String;
  constructor() {
    this.Email="";
    this.Password="";
  }
}