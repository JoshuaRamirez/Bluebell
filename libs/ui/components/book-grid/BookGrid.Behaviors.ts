import { Injectable } from '@angular/core';
import { BookGridModel } from './BookGrid.Model';

@Injectable({ providedIn: 'root' })
export class BookGridBehaviors {
  constructor(private model: BookGridModel) {}

  setBooks(books: string[]): void {
    this.model.books = books;
  }
}
