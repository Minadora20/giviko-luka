import {  Routes } from "@angular/router";


export const bathroomRoutes:Routes=[
    {
        path:'bathroom',
        loadComponent: () => import('./bathroom.component').then(module=>module.BathroomComponent)
    }
]