import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CampoColoridoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FuncionarioFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
