import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <button class="btn btn-info" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    &nbsp;
    <button class="btn btn-info" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
    &nbsp;
    <button class="btn btn-dark" (click)="tamano = 15">
      default
    </button>
    <br><br>
    
    <p [style.fontSize.px]="tamano">
      Texto bien interesante
    </p>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number = 15;

  constructor() { }

  ngOnInit() {
  }

}
