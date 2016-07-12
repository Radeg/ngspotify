import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {NavbarTopComponent} from './components/navbar-top/navbar-top.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {SpotifyService} from './services/spotify.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [HTTP_PROVIDERS, SpotifyService],
    directives: [ROUTER_DIRECTIVES, NavbarTopComponent, AboutComponent, SearchComponent]
})

export class AppComponent {

}
