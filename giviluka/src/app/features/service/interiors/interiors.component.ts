import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-interiors',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './interiors.component.html',
  styleUrl: './interiors.component.scss'
})
export class InteriorsComponent {

}
