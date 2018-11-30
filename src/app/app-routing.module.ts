import { BookListComponent } from './book/book-list/book-list.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { NgDatepickerModule } from 'ng2-datepicker';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'book/create',
    component: BookCreateComponent
  },
  {
    path: 'book/list',
    component: BookListComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'book/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgDatepickerModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
