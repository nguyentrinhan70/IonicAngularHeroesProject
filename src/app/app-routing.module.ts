import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeroesPage } from './heroes/heroes.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {

    path: 'heroes', 
    component: HeroesPage
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'hero-detail/:id',
    loadChildren: () => import('./hero-detail/hero-detail.module').then( m => m.HeroDetailPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'hero-search',
    loadChildren: () => import('./hero-search/hero-search.module').then( m => m.HeroSearchPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
