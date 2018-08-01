import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }          from './app.component';
import { HomeComponent }          from './home/home.component';
import { PricingComponent }          from './pricing/pricing.component';
import { ServicesComponent} from './services/services.component';
import { ContactComponent} from './contact/contact.component';

const routes: Routes = [

 { path: 'home', component: HomeComponent },
 { path: 'pricing', component: PricingComponent },
 { path: 'services', component: ServicesComponent},
 { path: 'contact', component: ContactComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
