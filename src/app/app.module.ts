import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { Routes, RouterModule } from '@angular/router';
import { WindowService } from './window.service';
import { AccueilComponent } from './accueil/accueil.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgbdNavCustomStyle } from './nav-custom-style/nav-custom-style.component';
import { ProfilComponent } from './profil/profil.component';

const appRoutes: Routes =
 [
  {path : 'phone-login',  component: PhoneLoginComponent},
  {path : 'accueil', component: AccueilComponent},
  {path : 'profil', component: ProfilComponent},
  {path: '' , redirectTo : 'phone-login' , pathMatch: 'full'},
  {path: '**' , redirectTo : 'phone-login' }
];





@NgModule({
  declarations: [
    AppComponent,
    PhoneLoginComponent,
    AccueilComponent,
    NgbdNavCustomStyle,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
