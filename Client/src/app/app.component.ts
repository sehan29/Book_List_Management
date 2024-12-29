import { Component, OnInit } from '@angular/core';
import { Book } from './models/book.model';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book = this.getEmptyBook();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe(books => (this.books = books));
  }

  onSave(book: Book): void {
    if (book.id) {
      this.bookService.updateBook(book).subscribe(() => this.fetchBooks());
    } else {
      this.bookService.addBook(book).subscribe(() => this.fetchBooks());
    }
    this.selectedBook = this.getEmptyBook(); // Reset selectedBook
  }

  onEdit(book: Book): void {
    this.selectedBook = { ...book };
  }

  onDelete(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => this.fetchBooks());
  }

  onFormReset(): void {
    this.selectedBook = this.getEmptyBook(); // Reset selectedBook
  }

  private getEmptyBook(): Book {
    return {
      id: 0,
      title: '',
      author: '',
      isbn: '',
      publicationDate: ''
    };
  }
}
