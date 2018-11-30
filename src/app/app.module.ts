import { BookListComponent } from './book/book-list/book-list.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { from } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDatepickerModule } from 'ng2-datepicker';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatTableModule,
  MatPaginatorModule, MatSortModule } from '@angular/material';
import { TableAuthorComponent } from './table-author/table-author.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCreateComponent,
    BookListComponent,
    TableAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgDatepickerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
