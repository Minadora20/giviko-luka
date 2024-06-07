
import { Routes } from '@angular/router';
import AboutComponent from './features/about/about.component';
import HomeComponent from './features/home/home.component';

import { HeaderComponent } from './features/header/header.component';
import ServiceComponent from './features/service/service.component';
import { WorkComponent } from './features/work/work.component';
import { ContactComponent } from './features/contact/contact.component';
import { kitchensRoutes } from './features/service/kitchens/kitchens.routes';
import { bathroomRoutes } from './features/service/bathroom/bathroom.routes';
import { interiorsroutes } from './features/service/interiors/interiors.routes';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { CardComponent } from './features/card/card.component';
import { sunrooms } from './features/service/sunrooms/sunrooms.routes';
import { exteriors } from './features/service/exteriors/exteriors.routes';
import { additions } from './features/service/additions/additions.routes';

export const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  { 
path:'about',
component:AboutComponent



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
{
  path: 'card',
  component:CardComponent
},
   ...kitchensRoutes,
   ...bathroomRoutes,
   ...interiorsroutes,
   ...exteriors,
   ...additions,
   ...sunrooms,



{
path:'**',
component:NotfoundComponent

},






]
