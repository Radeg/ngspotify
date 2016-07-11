import { Component } from '@angular/core';
import {NavbarTopComponent} from './components/navbar-top/navbar-top.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {ROUTER_DIRECTIVES, Route, Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, NavbarTopComponent, AboutComponent, SearchComponent]
})

@Route([
    {path: '/', component: SearchComponent},
    {path: '/about', component: AboutComponent}
])

export class AppComponent {
    constructor(private _router: Router) {

    }
}
