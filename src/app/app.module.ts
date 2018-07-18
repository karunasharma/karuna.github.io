import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    AboutComponent,
    LandingComponent,
    SidebarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
