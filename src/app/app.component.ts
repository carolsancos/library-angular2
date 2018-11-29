import { Component } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'library-angular2';
  date: Date;
  options: DatepickerOptions = {
    locale: enLocale
  };
  constructor() {
    this.date = new Date();
  }
}
