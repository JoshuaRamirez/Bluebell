import { Injectable } from '@angular/core';
import { AuthorProfileModel, AuthorMeta } from './AuthorProfile.Model';

@Injectable({ providedIn: 'root' })
export class AuthorProfileBehaviors {
  constructor(private model: AuthorProfileModel) {}

  setAuthor(author: AuthorMeta): void {
    this.model.author = author;
  }
}
