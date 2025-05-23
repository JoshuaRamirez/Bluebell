import { Routes } from '@angular/router';
import { SplashScreenComponent } from './screens/splash-screen/SplashScreen.Component';
import { ProfilePageComponent } from './screens/profile-page/ProfilePage.Component';
import { BooksScreenComponent } from './screens/books-screen/BooksScreen.Component';

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
