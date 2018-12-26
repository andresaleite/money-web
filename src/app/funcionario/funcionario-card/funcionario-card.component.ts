import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styles: [`
    .card-body{
      text-transform: uppercase;
      color: blue;
    }
  `]

})
export class FuncionarioCardComponent  {

  @Input() cidade: any;


}
