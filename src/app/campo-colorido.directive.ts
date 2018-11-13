import { Directive,  HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {


  @Input() cor;

  @Input('appCampoColorido') corOutra;

  @HostBinding('style.backgroundColor')  corDeFundo: String;

  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor === undefined ? this.corOutra : this.cor;
  }

  @HostListener('blur') descolorir() {
    this.corDeFundo =  'transparent';
  }


}
