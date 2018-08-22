import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
/* COMPONENTS */
import { AppComponent } from './app.component';
import { PersonListComponent } from './components/person-list/person-list.component';
/* SERVICES */
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
