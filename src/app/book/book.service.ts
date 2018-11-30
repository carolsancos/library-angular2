import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  libros = [];

  save(book: Book): any {
    this.libros.push(book);
  }

  getAll() {
    return this.libros;
  }

}
