import { Component } from '@angular/core';

@Component({
  selector: 'app-second-child-component',
  template: `<div style="margin:10px; padding:10px; border:1px solid black; background-color:#777">
  <span>Second child Component of LazyLoadedModule</span>
  </div>`
})
export class SecondChildComponent {
  title = 'app';
}
