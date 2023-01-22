import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularDocComponent } from './basicView/Edu/Angular/angular-doc/angular-doc.component';
import { ComponentComponent } from './basicView/Edu/component/component.component';
import { HomeComponent } from './basicView/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'edu',component:AngularDocComponent},
  {path:'Component',component:ComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
