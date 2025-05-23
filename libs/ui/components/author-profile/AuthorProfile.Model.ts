import { Injectable } from '@angular/core';

export interface AuthorMeta {
  name: string;
  age: number;
  biography: string;
  books: string[];
  website: string;
  awards: string[];
  location: string;
  nationality: string;
  genres: string[];
  languages: string[];
  education: string;
  influences: string[];
  writingStyle: string;
  researchInterests: string[];
  writingRoutine: string;
  contactEmail: string;
  socialLinks: Record<string, string>;
}

@Injectable({ providedIn: 'root' })
export class AuthorProfileModel {
  author: AuthorMeta = {
    name: 'Jane Doe',
    age: 42,
    biography: 'Jane Doe is a prolific writer known for her compelling fiction.',
    books: ['The First Book', 'Another Story', 'Final Tale'],
    website: 'https://example.com',
    awards: ['Best Fiction 2020', 'Readers Choice 2021'],
    location: 'New York, USA',
    nationality: 'American',
    genres: ['Fantasy', 'Science Fiction'],
    languages: ['English', 'Spanish'],
    education: 'MFA in Creative Writing',
    influences: ['Ursula K. Le Guin', 'Octavia Butler'],
    writingStyle: 'Lyrical prose with rich world-building',
    researchInterests: ['Mythology', 'Space exploration'],
    writingRoutine: 'Writes every morning from 6-9am',
    contactEmail: 'jane@example.com',
    socialLinks: {
      twitter: 'https://twitter.com/janedoe',
      github: 'https://github.com/janedoe'
    }
  };
}
