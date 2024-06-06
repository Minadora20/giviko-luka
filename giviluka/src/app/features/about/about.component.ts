import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule,RouterLink],
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






