import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchemesComponent } from './schemes/schemes.component';

const routes: Routes = [

 { path:'home' , component:HomeComponent},
 {path:'schemes',component:SchemesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
