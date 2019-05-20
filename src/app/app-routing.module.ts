import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
{path:'', component:LandingComponent},
{path:'policy', component: PolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent=[LandingComponent, PolicyComponent]
