import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {
    path:"curso",
    loadChildren: () => import('./curso/curso-buscar/curso-buscar.module').then(modulo => modulo.CursoBuscarModule)
  },
  {
    path:"curso/incluir",
    loadChildren: () => import('./curso/curso-incluir/curso-incluir.module').then(modulo => modulo.CursoIncluirModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
