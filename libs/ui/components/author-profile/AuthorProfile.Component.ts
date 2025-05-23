import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthorProfileModel } from './AuthorProfile.Model';
import { AuthorProfileInteractions } from './AuthorProfile.Interactions';

@Component({
  selector: 'ui-author-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './AuthorProfile.Template.html',
  styleUrl: './AuthorProfile.Styles.scss'
})
export class AuthorProfileComponent {
  objectKeys = Object.keys;
  constructor(
    public model: AuthorProfileModel,
    public interactions: AuthorProfileInteractions
  ) {}
}
