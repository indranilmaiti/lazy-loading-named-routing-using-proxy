import { Component } from '@angular/core';

@Component({
  selector: 'app-first-child-component',
  template: `<div style="margin:10px; padding:10px; border:1px solid black; background-color:#f5556f">
  <span>First child Component of LazyLoadedModule</span>
  </div>`
})
export class FirstChildComponent {
  title = 'app';
}
