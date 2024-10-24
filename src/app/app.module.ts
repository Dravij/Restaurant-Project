import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {AddRestoComponent} from './add-resto/add-resto.component'
import {UpdateRestoComponent} from './update-resto/update-resto.component'
import {ReactiveFormsModule} from '@angular/forms';
import {LoginRestoComponent} from './login-resto/login-resto.component'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestoService } from './resto.service';
import {ListRestoComponent} from './list-resto/list-resto.component';
import { RegisterRestoComponent } from './register-resto/register-resto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRestoComponent,
    LoginRestoComponent,
    UpdateRestoComponent,
    AddRestoComponent,
    RegisterRestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [RestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
