import { Injectable } from '@angular/core';
import { BookTreeModel, BookNode } from './BookTree.Model';

@Injectable({ providedIn: 'root' })
export class BookTreeBehaviors {
  constructor(private model: BookTreeModel) {}

  toggleNode(node: BookNode): void {
    node.expanded = !node.expanded;
  }
}
