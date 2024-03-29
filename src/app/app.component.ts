import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, NavbarComponent, HeroComponent, FooterComponent]
})
export class AppComponent {
  title = 'ecoinfl';
}
