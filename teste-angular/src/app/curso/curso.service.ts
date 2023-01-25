import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private baseURL ='http://localhost:3000';
  private endpoint = 'cursos';


  constructor(private httpClient: HttpClient) { }

  listar():Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(`${this.baseURL}/${this.endpoint}`);
  }
}
