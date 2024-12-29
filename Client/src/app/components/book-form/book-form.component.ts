import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],

})
export class BookFormComponent {
  @Input() book: Book = { id: 0, title: '', author: '', isbn: '', publicationDate: '' };
  @Output() save = new EventEmitter<Book>();

  onSubmit(): void {
    if (this.book.id === 0) {
      Swal.fire({
        title: 'Success!',
        text: 'Book has been added successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        this.save.emit({ ...this.book });
      });
    } else {
      Swal.fire({
        title: 'Success!',
        text: 'Book has been updated successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        this.save.emit({ ...this.book });
      });
    }
  }
}
