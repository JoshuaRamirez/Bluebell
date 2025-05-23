import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthorProfileComponent } from '../../../../libs/ui/components/author-profile';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, AuthorProfileComponent],
  templateUrl: './ProfilePage.Template.html',
  styleUrl: './ProfilePage.Styles.scss'
})
export class ProfilePageComponent {}
