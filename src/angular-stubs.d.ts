// Angular core module stubs for offline compilation

declare module '@angular/core' {
  export const Component: any;
  export const Injectable: any;
  export const Input: any;
  export const Output: any;
  export const EventEmitter: any;
  export type ApplicationConfig = any;
  export const provideZoneChangeDetection: any;
}

declare module '@angular/common' {
  export const CommonModule: any;
}

declare module '@angular/router' {
  export interface Routes extends Array<any> {}
  export const RouterModule: any;
  export const RouterOutlet: any;
  export function provideRouter(routes: Routes): any;
}

declare module '@angular/platform-browser' {
  export const bootstrapApplication: any;
}

declare module '@angular/platform-browser-dynamic' {
  export const platformBrowserDynamic: any;
}

declare module '@angular/core/testing' {
  export const TestBed: any;
}
