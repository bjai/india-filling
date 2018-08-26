import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, MenuComponent],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule { }
