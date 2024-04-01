import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EcoinflService } from '../../ecoinfl.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',


})
export class NavbarComponent {
  constructor(public _service: EcoinflService) {
    
  }
  

}
