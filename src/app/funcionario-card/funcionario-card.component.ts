import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-body{
      text-transform: uppercase;
      color: blue;
    }
  `]

})
export class FuncionarioCardComponent  {

  @Input() funcionario: any;


  getEstilosCartao(){
    return {
      backgroundColor : this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen',
      'border-width.px' : this.funcionario.id  }
  }

  isAdmin(){
    return this.funcionario.nome.startsWith('T');
  }
}
