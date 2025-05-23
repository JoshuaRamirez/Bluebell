import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookRowModel } from './BookRow.Model';
import { BookRowInteractions } from './BookRow.Interactions';

@Component({
  selector: 'ui-book-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './BookRow.Template.html',
  styleUrl: './BookRow.Styles.scss'
})
export class BookRowComponent {
  constructor(
    public model: BookRowModel,
    public interactions: BookRowInteractions
  ) {}
}
