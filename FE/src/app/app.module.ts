import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsDisplayComponent } from './components/charts/charts-display/charts-display.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { AboutPageComponent } from './components/about/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ChartsDisplayComponent,
    AddUserComponent,
    EditUserComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
