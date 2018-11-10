
import { Directive,  HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor')  corDeFundo: String;

  @HostListener('focus') quandoFocar() {
    this.corDeFundo = 'green';
  }

  @HostListener('blur') quandoPerderFoco() {
    this.corDeFundo =  'transparent';
  }


}
