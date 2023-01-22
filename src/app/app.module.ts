import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './basicView/home.component';
import { NavigationComponent } from './basicView/navigation/navigation.component';
import { LoginComponent } from './userCred/login/login.component';
import { RegistrationComponent } from './userCred/registration/registration.component';
import { ComponentComponent } from './basicView/Edu/component/component.component';
import { ModuleComponent } from './basicView/Edu/module/module.component';
import { AngularDocComponent } from './basicView/Edu/Angular/angular-doc/angular-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LoginComponent,
    RegistrationComponent,
    ComponentComponent,
    ModuleComponent,
    AngularDocComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
