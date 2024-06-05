import { Component, importProvidersFrom } from '@angular/core';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { routes } from './app.routes';
import { config } from 'rxjs';




@Component({
  selector: 'app-root' ,
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,RouterModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export  class AppComponent {
  title = 'giviluka';
}
