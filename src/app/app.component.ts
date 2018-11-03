import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "Andresa";
  adicionado = false;
  funcionarios = [];
  ultimoId = 0;
    adicionar(){
      this.adicionado = true;
      this.funcionarios.push({ 
        id: ++this.ultimoId,
        nome: this.nome});
    }
  }
