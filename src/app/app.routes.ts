import { Routes } from '@angular/router';
import { SplashScreenComponent } from './screens/SplashScreen/SplashScreen.Component';
import { ProfilePageComponent } from './screens/ProfilePage/ProfilePage.Component';
import { BooksScreenComponent } from './screens/BooksScreen/BooksScreen.Component';

export const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponent,
  },
  {
    path: 'author',
    component: ProfilePageComponent,
  },
  {
    path: 'books',
    component: BooksScreenComponent,
  },
];
