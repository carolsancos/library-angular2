import { Book } from './../book';
import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit {
  // [ {LibroId: 1, autores:[1,2,3]}, {libroId2: 2, autores [5,6,7]} ]
  bookList = [
    new Book(1, 'El Principito', '1943-9-20'),
    new Book(2, 'Anna Karenina', '1877-1-01'),
    new Book(3, 'Good Omens', '1655-1-01'),
    new Book(4, 'Regreso a Twin Peaks', '2017-1-01' )
  ];
  date: Date;
  options: DatepickerOptions = {
    locale: enLocale,
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'DD-MM-YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0 // 0 - Sunday, 1 - Monday
  };

  constructor() {
    this.date = new Date();
  }

  ngOnInit() {
  }

}
