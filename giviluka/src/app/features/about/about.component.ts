import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ContactComponent,  RouterModule,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
Afreeestimate: any;
 







constructor(private router:Router){

}
  contact(){
    this.router.navigate(['contact'])
  
  }
}






