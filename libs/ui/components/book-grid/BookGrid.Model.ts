import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookGridModel {
  books: string[] = [
    'Book One',
    'Book Two',
    'Book Three',
    'Book Four',
    'Book Five',
    'Book Six'
  ];
}
