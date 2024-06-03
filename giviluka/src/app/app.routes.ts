import { Title } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import AboutComponent from './features/about/about.component';
import HomeComponent from './features/home/home.component';
import { FooterComponent } from './features/footer/footer.component';
import { HeaderComponent } from './features/header/header.component';
import ServiceComponent from './features/service/service.component';
import { WorkComponent } from './features/work/work.component';
import { ContactComponent } from './features/contact/contact.component';
import { kitchensRoutes } from './features/service/kitchens/kitchens.routes';

export const routes: Routes = [
  { 
path:'about',
component:AboutComponent



},

{
  path:'home',
  component:HomeComponent
},

{
  path:'footer',
  component:FooterComponent
},

{
  path:'header',
  component:HeaderComponent
},

{
  path:'service',
  component:ServiceComponent,
  
},
{
  path:'work',
  component:WorkComponent
},
{
  path:'contact',
  component:ContactComponent
},
   ...kitchensRoutes
]
