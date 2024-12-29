import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { BookService } from './services/book.service'; // Import BookService



@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // Add HttpClientModule here

  ],
  providers: [BookService], // Provide BookService
  bootstrap: [AppComponent]
})
export class AppModule { }
