import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SunroomsComponent } from './sunrooms/sunrooms.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterModule, SunroomsComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export default  class ServiceComponent {


  constructor(private router: Router){}
  clickPhoto(){
    this.router.navigate(['kitchens'])
  }
  clickBathroom(){
    this.router.navigate(['bathroom'])
  }
  clickInteriors(){
    this.router.navigate(['interiors'])
  }
  clickAddintions(){
    this.router.navigate(['additions'])
  }
  clickExteriors(){
    this.router.navigate(['exteriors'])
  }
  clickSunrums(){
    this.router.navigate(['sunrooms'])
  }
  clickEstimate(){
    this.router.navigate(['contact'])
  }



  
}
