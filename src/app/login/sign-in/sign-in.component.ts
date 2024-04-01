
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EcoinflService } from '../../ecoinfl.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: '../sign-up/sign-up.component.css',

})
export class SignInComponent {
  User: SignIn;
  constructor(public _service: EcoinflService, private router: Router) {
    this.User = new SignIn();
  }
  SignIn() {
    // let myForm=new FormData();
    // myForm.append('Email',this.User.Email);
    // myForm.append('password',this.User.Password)
    this._service.SignIn(this.User.Email, this.User.Password)
      .subscribe({
        next: (data) => {
          this._service.User = data;
          console.log(data);
          this.router.navigate(['/Home'])
        },
        error: (e) => console.error(e)
      });

  }

}

export class SignIn {
  Email: string;
  Password: string;
  constructor() {
    this.Email = "";
    this.Password = "";
  }
}