import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './ui/input/input.component';
import { ButtonComponent } from './ui/button/button.component';
import { ShopService } from './services/shop.service';
import { HttpClientModule } from '@angular/common/http';
import { DrinkComponent } from './components/drink/drink.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MenuComponent,
    HomeComponent,
    ContactsComponent,
    PageNotFoundComponent,
    InputComponent,
    ButtonComponent,
    DrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
