import {  Routes } from "@angular/router";


export const sunrooms:Routes=[
    {
       
            
              path:'sunrooms',
              loadComponent: () => import('./sunrooms.component').then(module=>module.SunroomsComponent)
              
            
            
    
    },
]