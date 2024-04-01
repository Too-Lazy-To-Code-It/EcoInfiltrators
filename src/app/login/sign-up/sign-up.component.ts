import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EcoinflService } from '../../ecoinfl.service';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',

})
export class SignUpComponent {
  User: SignUp;
  constructor(public _service: EcoinflService,private router:Router) {
    this.User = new SignUp();
  }
  selectFile(event: any) {
    this.User.avatar = event.target.files[0];
  }
  AddUser() {
    let myForm = new FormData();
    myForm.append('username', this.User.username)
    myForm.append('password', this.User.password)
    myForm.append('Email', this.User.Email)
    myForm.append('avatar', this.User.avatar)
    this._service.SignUp(myForm).subscribe((res: any) => {

        console.log(`RESPONSE ${res}`);
        this.router.navigate(['/signIn'])
    },
      err => { console.log(`err ${err}`); })
  }
}
export class SignUp {
  Email: string;
  password: string;
  avatar: string;
  username: string

  constructor() {
    this.Email = "";
    this.password = "";
    this.avatar = "";
    this.username = "";
  }
}
