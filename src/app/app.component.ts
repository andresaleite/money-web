import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    cidades = [];

    constructor(private funcionarioService: FuncionarioService) { }

    ngOnInit() {
      this.cidades = this.funcionarioService.consultar();
    }

    alterar(nome: string) {
      alert(JSON.stringify(nome));
    }

    excluir(codigo: number) {
      alert('excluir' + codigo);
    }

  }
