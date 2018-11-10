
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  //selector: 'button'
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {


  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('focus') quandoFocar() {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'yellow');
  }

  @HostListener('blur') quandoPerderFoco() {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'transparent');
  }


}
