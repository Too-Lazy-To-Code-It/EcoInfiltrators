import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',

})
export class SignUpComponent {
  User: SignUp;
  constructor() {
    this.User=new SignUp();
  }
}

export class SignUp {
  Email: String;
  Password: String;
  Name:String;
  Username:String

  constructor() {
    this.Email = "";
    this.Password = "";
    this.Name="";
    this.Username="";
  }
}