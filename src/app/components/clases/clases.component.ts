import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
})
export class ClasesComponent implements OnInit {

  alerta:string = "alert-primary"
  loading:boolean = false

  propiedades:any = {
    danger: false
  }

  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.loading = true;

    setTimeout(()=> this.loading = false, 3000);
  }

}
