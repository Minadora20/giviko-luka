import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-exteriors',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './exteriors.component.html',
  styleUrl: './exteriors.component.scss'
})
export class ExteriorsComponent {
 
}
