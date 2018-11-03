import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent {
  nome = "Andresa";
  idade = 25;

  adicionar(){
    
    console.log('adicionar'+this.nome);
    const numero = Math.round(Math.random() * 100);
    this.nome = "desa"+ numero;
  }

  alterarNome(teste: any){
    this.nome =  teste.target.value;
    console.log('altera:'+teste);
  }
 

}
