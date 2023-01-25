import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CursoBuscarRoutingModule } from './curso-buscar-routing.module';
import { CursoBuscarComponent } from './curso-buscar/curso-buscar.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CursoBuscarComponent],
  imports: [
    CommonModule,
    CursoBuscarRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule


  ]
})
export class CursoBuscarModule { }
