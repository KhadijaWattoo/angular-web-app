import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'second',
    loadComponent: () => import('./second/second.page').then((m) => m.SecondPage),

  },
  {
    path: 'three',
    loadComponent: () => import('./three/three.page').then((m) => m.ThreePage),

  },
  {
    path: 'four',
    loadComponent: () => import('./four/four.page').then( m => m.FourPage)
  },
  {
    path: 'five',
    loadComponent: () => import('./five/five.page').then( m => m.FivePage)
  },
  {
    path: 'six',
    loadComponent: () => import('./six/six.page').then( m => m.SixPage)
  },
  {
    path: 'seven',
    loadComponent: () => import('./seven/seven.page').then( m => m.SevenPage)
  },
  {
    path: 'eight',
    loadComponent: () => import('./eight/eight.page').then( m => m.EightPage)
  },
  {
    path: 'nine',
    loadComponent: () => import('./nine/nine.page').then( m => m.NinePage)
  },
  {
    path: 'slider',
    loadComponent: () => import('./slider/slider.page').then( m => m.SliderPage)
  },
  {
    path: 'ten',
    loadComponent: () => import('./ten/ten.page').then( m => m.TenPage)
  },
  {
    path: 'task11',
    loadComponent: () => import('./task11/task11.page').then( m => m.Task11Page)
  },
];
