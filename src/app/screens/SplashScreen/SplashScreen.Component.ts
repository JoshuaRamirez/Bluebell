import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileSelectorComponent } from '../../../../libs/ui/components/profile-selector';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule, ProfileSelectorComponent],
  templateUrl: './SplashScreen.Template.html',
  styleUrl: './SplashScreen.Styles.scss'
})
export class SplashScreenComponent {}
