import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursoService } from './../curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  public curso
  public subscribe: Subscription;

  constructor(private route: ActivatedRoute, 
              private cursoService: CursoService) {
    // Assim nao escuta alteração da rota quando já ativa.
    //this.idCurso = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.subscribe = this.route.params.subscribe(
      (params) => this.curso = this.cursoService.getCurso(params['id']));
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
