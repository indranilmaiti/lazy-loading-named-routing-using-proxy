import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LazyLoadedModule } from './lazy-loaded-module/lazy-loaded-module';
import { ProxyComponent } from './lazy-loaded-prox.component';

@NgModule({
  declarations: [
    AppComponent,
    ProxyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'namedRoute', component: ProxyComponent, outlet: 'lazy', children: [

          { path: '', loadChildren: './lazy-loaded-module/lazy-loaded-module#LazyLoadedModule' }]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
