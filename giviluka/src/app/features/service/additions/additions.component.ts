import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-additions',
  standalone: true,
  imports: [RouterModule, CommonModule, ],
  templateUrl: './additions.component.html',
  styleUrl: './additions.component.scss'
})
export class AdditionsComponent {
 
 
}
