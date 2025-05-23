import { Injectable } from '@angular/core';
import { BookRowBehaviors } from './BookRow.Behaviors';

@Injectable({ providedIn: 'root' })
export class BookRowInteractions {
  constructor(private behaviors: BookRowBehaviors) {}

  updateBooks(books: string[]): void {
    this.behaviors.setBooks(books);
  }
}
