import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "Andresa";
  idade = 25;

  alertaNome(nome : string){
    this.nome = nome.target.value;    
  }

  adicionar(nome : string){
    this.nome = nome;
    
  }
}
