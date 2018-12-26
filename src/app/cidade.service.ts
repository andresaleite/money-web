import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class CidadeService {

  constructor(private http: Http ) {}

  ultimoId = 1;
  cidades = [{id: 1, nome: 'Ubernlândia'}];
  cidade = {nome: ''};
  adicionar(nome: string): Promise<any> {
    this.cidade = {nome: nome};
    return this.http.post('http://localhost:3000/cidades', this.cidade)
    .toPromise()
    .then(response => response.json());

  }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:3000/cidades')
    .toPromise()
    .then(response => response.json());
  }


  alterar(cidade): Promise<any> {
    return this.http.put('http://localhost:3000/cidades/' + cidade.id, {nome: cidade.nome} )
    .toPromise()
    .then(response => response.json());

  }


  excluir(id: number): Promise<any> {
    return this.http.delete('http://localhost:3000/cidades/' + id)
    .toPromise()
    .then(response => response.json());

  }
}

