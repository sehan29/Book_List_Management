import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],

})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() edit = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<number>();

  confirmDelete(bookId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete.emit(bookId);
        Swal.fire('Deleted!', 'Your book has been deleted.', 'success');
      }
    });
  }
}
