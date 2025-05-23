import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './SplashScreen.Template.html',
  styleUrl: './SplashScreen.Styles.scss'
})
export class SplashScreenComponent {}
