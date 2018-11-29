import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


// TODO: Replace this with your own data model type
export interface TableAuthorItem {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableAuthorItem[] = [
  {id: 1, name: 'Antoine de Saint Exupéry'},
  {id: 2, name: 'León Tolstói'},
  {id: 3, name: 'Neil Gaiman'},
  {id: 4, name: 'Terry Pratchett'},
  {id: 5, name: 'David Lynch'},
  {id: 6, name: 'Nacho Vigalongo'},
  {id: 7, name: 'Michel Chion'},
  {id: 8, name: 'Enric Ros'},
  {id: 9, name: 'Raquel Crisóstomo'},
  {id: 10, name: 'Miguel De Cervantes'},
  {id: 11, name: 'Daniel Defoe '},
  {id: 12, name: 'John Bunyan'},
  {id: 13, name: 'Jonathan Swift '},
  {id: 14, name: 'Henry Fielding '},
  {id: 15, name: 'Samuel Richardson'},
  {id: 16, name: 'Jane Austen'},
  {id: 17, name: 'Mary Shelley'},
  {id: 18, name: 'Thomas Love Peacock'},
  {id: 19, name: 'Stendhal'},
  {id: 20, name: 'Alexandre Dumas '},
];

/**
 * Data source for the TableAuthor view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableAuthorDataSource extends DataSource<TableAuthorItem> {
  data: TableAuthorItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableAuthorItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableAuthorItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableAuthorItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
