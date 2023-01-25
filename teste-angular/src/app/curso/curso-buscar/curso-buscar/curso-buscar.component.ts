import { FormGroup, FormBuilder } from '@angular/forms';
import { OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { CursoService } from './../../curso.service';
import { Component } from '@angular/core';
import {Curso} from './../../curso.model';

@Component({
  selector: 'app-curso-buscar',
  templateUrl: './curso-buscar.component.html',
  styleUrls: ['./curso-buscar.component.scss']
})
export class CursoBuscarComponent implements OnInit{
    course:Curso[] = [

   {codigo: 1,
    nome:"Angular",
    instrutor:"Genildo",
    local:"Softex",
    carga_horaria:36,
    data_inicio:"03/02/2020"},

      {codigo:2,
      nome:"Java",
      instrutor:"Genildo",
      local:"Softex",
      carga_horaria:60,
      data_inicio :"06/02/2020"}

    ]
    displayedColumns= ['codigo','nome','instrutor','local',
    'carga_horaria', 'data_inicio']

  //curso$: Observable<Curso[]>;
    //this.curso$= [];

    /*formGRoupPesquisa:FormGroup;

    constructor(private formeBuilder:FormBuilder){
      this.formGRoupPesquisa =this.formeBuilder.group({
        nome:[null]
      })

    }*/


  ngOnInit(): void {
    //this.listarCursos();
  }

 /* listarCursos(){
 //this.curso$= this.cursoService.listar();
  }*/

}
