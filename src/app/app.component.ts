import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "Andresa";
  idade = 25;

    adicionar(){
      const num = Math.round(Math.random()* 100) ;
      this.nome = "Teste: "+num;
    }
  }
