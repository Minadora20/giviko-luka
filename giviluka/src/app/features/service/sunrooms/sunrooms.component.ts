import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import ServiceComponent from '../service.component';

@Component({
  selector: 'app-sunrooms',
  standalone: true,
  imports: [RouterModule, CommonModule, ServiceComponent],
  templateUrl: './sunrooms.component.html',
  styleUrl: './sunrooms.component.scss'
})
export class SunroomsComponent {


}
