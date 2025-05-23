import { Injectable } from '@angular/core';
import { BookTreeBehaviors } from './BookTree.Behaviors';
import { BookNode } from './BookTree.Model';

@Injectable({ providedIn: 'root' })
export class BookTreeInteractions {
  constructor(private behaviors: BookTreeBehaviors) {}

  onNodeClick(node: BookNode): void {
    if (node.children) {
      this.behaviors.toggleNode(node);
    }
  }
}
