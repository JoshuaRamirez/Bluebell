import { Injectable } from '@angular/core';
import { ProfileSelectorModel } from './ProfileSelector.Model';

@Injectable({ providedIn: 'root' })
export class ProfileSelectorBehaviors {
  constructor(private model: ProfileSelectorModel) {}

  selectProfile(profile: string): void {
    this.model.selectedProfile = profile;
  }
}
