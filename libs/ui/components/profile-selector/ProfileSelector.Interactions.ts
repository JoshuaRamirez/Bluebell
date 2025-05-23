import { Injectable } from '@angular/core';
import { ProfileSelectorBehaviors } from './ProfileSelector.Behaviors';

@Injectable({ providedIn: 'root' })
export class ProfileSelectorInteractions {
  constructor(private behaviors: ProfileSelectorBehaviors) {}

  onProfileClick(profile: string): void {
    this.behaviors.selectProfile(profile);
  }
}
