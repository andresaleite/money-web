import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class FuncionarioService {

  constructor(private http: Http ) {}

  ultimoId = 1;
  funcionarios = [{id: 1, nome: 'Ubernlândia'}];

  adicionar(nome: string) {
    const funcionario = {
      id: ++ this.ultimoId,
      nome: nome
    };

    this.funcionarios.push(funcionario);
  }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:3000/cidades')
    .toPromise()
    .then(response => response.json());
  }


}

