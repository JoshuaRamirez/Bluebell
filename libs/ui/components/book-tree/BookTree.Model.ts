import { Injectable } from '@angular/core';

export interface BookNode {
  title: string;
  children?: BookNode[];
  expanded?: boolean;
}

@Injectable({ providedIn: 'root' })
export class BookTreeModel {
  tree: BookNode[] = [
    {
      title: 'Fiction',
      expanded: false,
      children: [
        {
          title: 'Fantasy',
          expanded: false,
          children: [
            { title: 'The Hobbit' },
            { title: 'Harry Potter' }
          ]
        },
        {
          title: 'Science Fiction',
          expanded: false,
          children: [
            { title: 'Dune' },
            { title: 'Neuromancer' }
          ]
        }
      ]
    },
    {
      title: 'Non-Fiction',
      expanded: false,
      children: [
        { title: 'History' },
        { title: 'Science' }
      ]
    }
  ];
}
