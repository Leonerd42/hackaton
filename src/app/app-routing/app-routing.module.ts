import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { RegisterComponent } from '../pages/register/register.component';
import { HomeComponent } from '../pages/home/home.component';
import {SobreComponent} from '../pages/sobre/sobre.component';
import {MissaoComponent} from '../pages/missao/missao.component';
import {EquipesComponent} from '../pages/equipes/equipes.component';
import {ParceirosComponent} from '../pages/parceiros/parceiros.component';
import { ConstrutionComponent } from '../pages/constrution/constrution.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: 'register',
      component: RegisterComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
  path: 'missao',
  component: MissaoComponent
  },
  {
    path: 'equipes',
    component: EquipesComponent
  },
  {
    path: 'parceiros',
    component: ParceirosComponent
  }, 
  {
    path: 'constru',
    component: ConstrutionComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
