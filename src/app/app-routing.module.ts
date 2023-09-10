import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,title:"Home component"},
  {path:"about",component:AboutComponent ,title:"About component"},
  {path:"portfolio",component:PORTFOLIOComponent,title:"portfolio component"},
  {path:"contact",component:ContactComponent,title:"contact component"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
