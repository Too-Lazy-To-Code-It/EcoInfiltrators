import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./front-office/navbar/navbar.component";
import { HeroComponent } from "./front-office/hero/hero.component";
import { FooterComponent } from "./front-office/footer/footer.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, NavbarComponent, HeroComponent, FooterComponent]
})
export class AppComponent {
  constructor(private router: Router) {

  }
  title = 'ecoinfl';

  shouldDisplayNavbar(): boolean {
    const currentRoute = this.router.url;
    return !['/signIn', '/signUp'].includes(currentRoute);
  }
}
