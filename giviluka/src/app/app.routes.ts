import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    title: 'Home',
    loadComponent: () => import('./features/home/home.component'),
    
     
  } ,{path:'about',
    title:'about',
    loadComponent: () => import ('./features/about/about.component')
  },
   {path :'service',
    title: 'service',
    loadComponent: () => ('./features/service/service.component')
      
    

   }];
