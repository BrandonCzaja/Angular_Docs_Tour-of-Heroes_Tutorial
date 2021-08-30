import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; //  NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component'; // Imported automatically by the Angular CLI

@NgModule({
  declarations: [AppComponent, HeroesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
