import {  Routes } from "@angular/router";


export const exteriors:Routes=[
    {
       
            
              path:'exteriors',
              loadComponent: () => import('./exteriors.component').then(module=>module.ExteriorsComponent)
              
            
            
      
    },
    ]