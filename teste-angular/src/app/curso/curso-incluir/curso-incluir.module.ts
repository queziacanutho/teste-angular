import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoIncluirRoutingModule } from './curso-incluir-routing.module';
import { CursoIncluirComponent } from './curso-incluir/curso-incluir.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    CursoIncluirComponent
  ],
  imports: [
    CommonModule,
    CursoIncluirRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule
  ]
})
export class CursoIncluirModule { }
