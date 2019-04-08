import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  getCursos() {
    return [
      { id: 1, descricao: 'Angular'},
      { id: 2, descricao: 'Java'},
      { id: 3, descricao: 'JavaScript'}
    ]
  }

  getCurso(id: number) {
    return this.getCursos().find((e) => e.id == id);
  }
}
