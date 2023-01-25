import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-curso-incluir',
  templateUrl: './curso-incluir.component.html',
  styleUrls: ['./curso-incluir.component.scss']
})
export class CursoIncluirComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup= this.formBuilder.group({
      nome:["", Validators.required],
      instrutor:[""],
      local:[""],
      carga_horaria:[""],
      data_inicio:[""]
    })
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
       nome:["", Validators.required]
    })
  }

}
