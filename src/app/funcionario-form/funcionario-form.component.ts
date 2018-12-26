import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  funcionarioService: FuncionarioService;

  constructor() {
    this.funcionarioService = new FuncionarioService();
  }
  adicionar(nome: string) {
    console.log(nome);
    this.funcionarioService.adicionar(nome);
  }


}
