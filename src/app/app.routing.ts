import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



const appRoutes: Routes = [
{ path: '', component: LandingComponent },
{ path: 'home', component: LandingComponent },
{ path: 'main', component: MainContentComponent },
{ path: 'about', component: AboutComponent }
{ path: 'contact', component: ContactComponent }]

export const routing = RouterModule.forRoot(appRoutes);