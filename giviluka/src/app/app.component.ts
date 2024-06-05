import { Component,  } from '@angular/core';
import { RouterModule, RouterOutlet,  } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';





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
