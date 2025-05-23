import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookTreeModel, BookNode } from './BookTree.Model';
import { BookTreeInteractions } from './BookTree.Interactions';

@Component({
  selector: 'ui-book-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './BookTree.Template.html',
  styleUrl: './BookTree.Styles.scss'
})
export class BookTreeComponent {
  constructor(
    public model: BookTreeModel,
    public interactions: BookTreeInteractions
  ) {}

  trackByTitle(_: number, node: BookNode): string {
    return node.title;
  }
}
