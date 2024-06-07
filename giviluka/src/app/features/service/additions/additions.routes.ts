import {  Routes } from "@angular/router";

export const additions:Routes=[
    {
       
            
              path:'additions',
              loadComponent: () => import('./additions.component').then(module=>module.AdditionsComponent)
              
            
            
      
    },
    ]
