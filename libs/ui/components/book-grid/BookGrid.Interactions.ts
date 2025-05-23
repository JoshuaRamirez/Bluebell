import { Injectable } from '@angular/core';
import { BookGridBehaviors } from './BookGrid.Behaviors';

@Injectable({ providedIn: 'root' })
export class BookGridInteractions {
  constructor(private behaviors: BookGridBehaviors) {}

  updateBooks(books: string[]): void {
    this.behaviors.setBooks(books);
  }
}
