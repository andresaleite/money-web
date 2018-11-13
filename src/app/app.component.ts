import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nome =  'Andrêsa';
    data = new Date();
    preco = 785477;
    troco = 1002.55;
    funcionarios = [];

    aoAdicionar(funcionario: string) {
      this.funcionarios.push(funcionario);
    }


  }
