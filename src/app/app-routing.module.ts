import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroebusquedaComponent } from './components/heroebusqueda/heroebusqueda.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component:HeroesComponent},
  {path: 'about', component:AboutComponent},
  {path: 'heroe/:id', component:HeroeComponent},
  {path: 'busquedaheroe/:termino', component:HeroebusquedaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
