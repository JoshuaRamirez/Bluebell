import { Injectable } from '@angular/core';
import { BookRowModel } from './BookRow.Model';

@Injectable({ providedIn: 'root' })
export class BookRowBehaviors {
  constructor(private model: BookRowModel) {}

  setBooks(books: string[]): void {
    this.model.books = books;
  }
}
