import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor:string;

  constructor(private el:ElementRef) {
    
  }

  @HostListener('mouseenter') mouseEntra(){
    this.resaltar(this.nuevoColor || '#5491ba');
  }

  @HostListener('mouseleave') mouseSale(){
    this.resaltar(null);
  }

  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
