import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookGridComponent } from '../../../../libs/ui/components/book-grid';
import { BookRowComponent, BookRowInteractions } from '../../../../libs/ui/components/book-row';

@Component({
  selector: 'app-books-screen',
  standalone: true,
  imports: [CommonModule, BookGridComponent, BookRowComponent],
  templateUrl: './BooksScreen.Template.html',
  styleUrl: './BooksScreen.Styles.scss'
})
export class BooksScreenComponent {
  constructor(private bookRowInteractions: BookRowInteractions) {
    this.bookRowInteractions.updateBooks([
      'Row Book One',
      'Row Book Two',
      'Row Book Three'
    ]);
  }
}
