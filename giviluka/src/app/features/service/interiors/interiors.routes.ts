import {  Routes } from "@angular/router";


export const interiorsroutes:Routes=[

    {
        path:'interiors',
        loadComponent: () => import('./interiors.component').then(module=>module.InteriorsComponent)
    }
]