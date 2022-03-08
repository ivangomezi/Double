import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => 
    import('./modules/double/double-routing.module')
    .then(m => m.DoubleRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'app' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
