import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lazy Loading in Named Routing';

  constructor(private router: Router) {

  }

  activateNamedRoute() {
    this.router.navigate([{ outlets: { lazy: ['namedRoute'] }}]);
  }
}
