import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableAuthorDataSource, TableAuthorItem } from './table-author-datasource';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-table-author',
  templateUrl: './table-author.component.html',
  styleUrls: ['./table-author.component.sass'],
})
export class TableAuthorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableAuthorDataSource;
  selection = new SelectionModel<TableAuthorItem>(true, []);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'name'];

  ngOnInit() {
    this.dataSource = new TableAuthorDataSource(this.paginator, this.sort);
  }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }
}
