import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

 
@Component({
  selector: 'app-kitchens',
  standalone: true,
  imports: [RouterModule, CommonModule, ],
  templateUrl: './kitchens.component.html',
  styleUrl: './kitchens.component.scss'
})
export class KitchensComponent {


  constructor(private router: Router){}
  addedToCard(){
    this.router.navigate(['card'])
  }
}