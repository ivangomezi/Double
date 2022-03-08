import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DoubleRoutingModule } from './double-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    DoubleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class DoubleModule { }
