import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-bathroom',
  standalone: true,
  imports: [RouterModule, CommonModule,],
  templateUrl: './bathroom.component.html',
  styleUrl: './bathroom.component.scss'
})
export class BathroomComponent {

}
