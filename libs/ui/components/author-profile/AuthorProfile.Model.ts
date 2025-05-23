import { Injectable } from '@angular/core';

export interface AuthorMeta {
  name: string;
  age: number;
  biography: string;
  books: string[];
  website: string;
  awards: string[];
}

@Injectable({ providedIn: 'root' })
export class AuthorProfileModel {
  author: AuthorMeta = {
    name: 'Jane Doe',
    age: 42,
    biography: 'Jane Doe is a prolific writer known for her compelling fiction.',
    books: ['The First Book', 'Another Story', 'Final Tale'],
    website: 'https://example.com',
    awards: ['Best Fiction 2020', 'Readers Choice 2021']
  };
}
