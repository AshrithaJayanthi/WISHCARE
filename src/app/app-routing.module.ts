import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SchemedetailsComponent } from './schemedetails/schemedetails.component';
import { SchemesComponent } from './schemes/schemes.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [

 { path:'home' , component:HomeComponent},
 {path:'schemes',component:SchemesComponent},
 {path:'register',component:RegisterComponent},
 {
   path:'search',component:SearchComponent
 },
 {path:'contactus',component:ContactusComponent},
 {path:'schemes/:sno',component:SchemedetailsComponent},
 {path:'',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
