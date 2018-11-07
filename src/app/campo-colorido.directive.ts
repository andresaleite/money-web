import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  //selector: 'button'
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(elementRef.nativeElement,
      'background-color', 'yellow');
   }

}
