import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileSelectorModel } from './ProfileSelector.Model';
import { ProfileSelectorInteractions } from './ProfileSelector.Interactions';

@Component({
  selector: 'ui-profile-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ProfileSelector.Template.html',
  styleUrl: './ProfileSelector.Styles.scss'
})
export class ProfileSelectorComponent {
  constructor(
    public model: ProfileSelectorModel,
    public interactions: ProfileSelectorInteractions
  ) {}
}
