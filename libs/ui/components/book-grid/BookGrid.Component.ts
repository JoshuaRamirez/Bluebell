import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookGridModel } from './BookGrid.Model';
import { BookGridInteractions } from './BookGrid.Interactions';

@Component({
  selector: 'ui-book-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './BookGrid.Template.html',
  styleUrl: './BookGrid.Styles.scss'
})
export class BookGridComponent {
  constructor(
    public model: BookGridModel,
    public interactions: BookGridInteractions
  ) {}
}
