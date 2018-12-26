import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CampoColoridoDirective } from './campo-colorido.directive';
import { LogService } from './log.service';
import { FuncionarioModule } from './funcionario/funcionario.module';


@NgModule({
  declarations: [
    AppComponent,
    CampoColoridoDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FuncionarioModule,
    HttpModule
  ],
  providers: [LogService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
