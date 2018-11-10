import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  nome = "Andrêsa";
  green = 'black';
  @Output() funcionarioAdicionado = new EventEmitter();
  adicionado = false;
  ultimoId = 0;

  adicionar() {
    this.adicionado = true;
    const funcionario = {
      id: ++this.ultimoId,
       nome: this.nome};
    this.funcionarioAdicionado.emit(funcionario);
   }

}