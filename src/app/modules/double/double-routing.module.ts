import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

import { ScoreGuard } from 'src/app/core/guard/score.guard';

const routes: Routes = [
  {
      path: '',
      children: [
          {path: 'users', component: HomeComponent},
          {path: 'user/:id', component: UsuariosComponent, canActivate: [ScoreGuard]},
          {path: '**', redirectTo: 'users'}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DoubleRoutingModule { }
