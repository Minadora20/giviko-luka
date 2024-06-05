import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';
import { FormComponent } from '../../shared/ui/form/form.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class  HomeComponent {






constructor(private router:Router){

}
  about
(){  this.router.navigate(['about'])

}
services
(){  this.router.navigate(['services'])

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

  
    
  }

 
 








