import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  nome = 'Andrêsa';

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
