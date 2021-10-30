import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SchemesComponent } from './schemes/schemes.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './search.pipe';
import { ContactusComponent } from './contactus/contactus.component';
import { SchemedetailsComponent } from './schemedetails/schemedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchemesComponent,
    RegisterComponent,
    FooterComponent,
    SearchComponent,
    SearchPipe,
    ContactusComponent,
    SchemedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
