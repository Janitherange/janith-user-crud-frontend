import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './pages/view/view.component';
import { SidebarButtonComponent } from './components/sidebar-button/sidebar-button.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { SuccessMessageComponent } from './components/success-message/success-message.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SidebarButtonComponent,
    SidebarComponent,
    CreateComponent,
    UpdateComponent,
    ErrorMessageComponent,
    SuccessMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
