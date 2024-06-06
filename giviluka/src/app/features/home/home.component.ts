import { Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { FormComponent } from '../../shared/ui/form/form.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class  HomeComponent {
Freeestimate() {
throw new Error('Method not implemented.');
}






constructor(private router:Router){

}
  about
(){  this.router.navigate(['about'])

}
services
(){  this.router.navigate(['service'])

}

kitchens(){
  this.router.navigate(['kitchens'])
  
 
}

bathroom(){
  this.router.navigate(['bathroom'])
}
  
  interiors(){
    this.router.navigate(['interiors'])
  }

  contact(){
    this.router.navigate(['contact'])
  }
  
  
    
  }

 
 








