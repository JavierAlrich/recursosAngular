import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [`
    p{
      color: #454545;
      font-weight: bold;
      font-size: 18px;
      border-left: 3px solid #5491ba;
      padding-left: 5px;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
