import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioService } from '../funcionario.service';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';

@NgModule({
  declarations: [FuncionarioCardComponent, FuncionarioFormComponent],
  imports: [
    CommonModule
  ],
  exports: [FuncionarioCardComponent, FuncionarioFormComponent],
  providers: [FuncionarioService]
})
export class FuncionarioModule { }
