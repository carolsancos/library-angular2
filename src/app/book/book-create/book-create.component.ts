import { Author } from './../../author/author';
import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.sass']
})
export class BookCreateComponent implements OnInit {
  authorList = [
    new Author(1, 'Antoine de Saint Exupéry'),
    new Author(2, 'León Tolstói'),
    new Author(3, 'Neil Gaiman'),
    new Author(4, 'Terry Pratchett'),
    new Author(5, 'David Lynch'),
    new Author(6, 'Nacho Vigalongo'),
    new Author(7, 'Michel Chion'),
    new Author(8, 'Enric Ros'),
    new Author(9, 'Raquel Crisóstomo')
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

  constructor() { }

  ngOnInit() {
  }

}
