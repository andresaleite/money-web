import { Component, OnInit } from '@angular/core';
import { CidadeService } from './cidade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    cidades = [];
    constructor(private cidadeService: CidadeService) { }

    ngOnInit() {
      this.consultar();
    }

    consultar() {
      this.cidadeService.consultar().then(response => {
        this.cidades = response;
      });
    }

    adicionar(nome: string) {

      this.cidadeService.adicionar( nome ).then(response => {
        this.consultar();
      });
    }

    alterar(cidade) {
      this.cidadeService.alterar(cidade).then(response => {
        this.consultar();
      }).catch(erro => {
        alert(erro);
      });
    }

    excluir(id: number) {
      this.cidadeService.excluir(id).then(response => {
        this.consultar();
      });
    }

  }
