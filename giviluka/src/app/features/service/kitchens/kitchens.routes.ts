import {  Routes } from "@angular/router";

export const kitchensRoutes:Routes=[
{
   
        
          path:'kitchens',
          loadComponent: () => import('./kitchens.component').then(module=>module.KitchensComponent)
          
        
        
  
},
]