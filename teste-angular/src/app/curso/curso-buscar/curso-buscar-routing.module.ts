import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoBuscarComponent } from './curso-buscar/curso-buscar.component';

const routes: Routes = [
  {path:"", component: CursoBuscarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoBuscarRoutingModule { }
