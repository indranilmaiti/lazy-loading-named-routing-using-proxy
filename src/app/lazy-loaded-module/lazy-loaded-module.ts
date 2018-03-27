
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseComponent } from './base-component';
import { FirstChildComponent } from './first-child-component';
import { SecondChildComponent } from './second-child-component';


@NgModule({
    declarations: [
        BaseComponent,
        FirstChildComponent,
        SecondChildComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: BaseComponent, children: [
                    { path: 'first-child', component: FirstChildComponent },
                    { path: 'second-child', component: SecondChildComponent }
                ]
            }
        ])
    ],
    providers: []
})
export class LazyLoadedModule { }
