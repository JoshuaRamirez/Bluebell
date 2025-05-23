import { Injectable } from '@angular/core';
import { AuthorProfileBehaviors } from './AuthorProfile.Behaviors';
import { AuthorMeta } from './AuthorProfile.Model';

@Injectable({ providedIn: 'root' })
export class AuthorProfileInteractions {
  constructor(private behaviors: AuthorProfileBehaviors) {}

  updateAuthor(author: AuthorMeta): void {
    this.behaviors.setAuthor(author);
  }
}
