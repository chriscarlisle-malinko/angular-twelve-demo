import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './clients/client.component';
import { UserComponent } from './users/user.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    UserComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
