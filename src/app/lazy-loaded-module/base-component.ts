import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-base-component',
    template: `<div style="margin:10px; padding:10px; border:1px solid black; background-color:#AAA777">
  <span>Base Component of LazyLoadedModule</span>
  <div style="padding:10px;margin:10px">
  <span style="padding:10px; margin:10px; border:1px solid black; background-color:red"
   (click)="GotoFirstChild()">
  Go to First Child</span>

  <span style="padding:10px; margin:10px; border:1px solid black; background-color:green"
   (click)="GotoSecondChild()">
  Go to Secaond Child</span>
  </div>
  <router-outlet></router-outlet>
  </div>`
})
export class BaseComponent {
    title = 'app';

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    }

    GotoFirstChild() {
        this.router.navigate(['./first-child'], { relativeTo: this.activatedRoute });
    }

    GotoSecondChild() {
        this.router.navigate(['./second-child'], { relativeTo: this.activatedRoute });
    }
}
