import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProfileSelectorModel {
  profiles: string[] = ['Guest', 'Admin'];
  selectedProfile: string | null = null;
}
