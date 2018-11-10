
import { Directive,  HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {


  @Input() cor;

  @Input('appCampoColorido') corOutra;

  @HostBinding('style.backgroundColor')  corDeFundo: String;

  @HostListener('focus') quandoFocar() {
    this.corDeFundo = this.cor === undefined ? this.corOutra : this.cor;
  }

  @HostListener('blur') quandoPerderFoco() {
    this.corDeFundo =  'transparent';
  }


}
