import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()
export class FuncionarioService {

  ultimoId = 1;
  funcionarios = [{id: 1, nome: 'Joana'}];

  constructor(private log: LogService) {}

  adicionar(nome: string) {
    const funcionario = {
      id: ++ this.ultimoId,
      nome: nome
    };

    this.funcionarios.push(funcionario);
    this.log.log(`teste ${nome}`);
  }

  consultar() {
    return this.funcionarios;
  }
}

