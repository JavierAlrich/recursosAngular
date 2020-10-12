import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  
  ngOnChanges() {
    console.log('NgOnChanges')
  }

  ngDoCheck() {
    console.log('NgDoCheck')
  }

  ngAfterContentInit() {
    console.log('NgAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('NgAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('NgAfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('NgAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('NgOnDestroy');
  }

}
