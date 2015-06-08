/**
 * Created by Sven on 08.06.2015.
 */
/// <reference path="typings/angular2/angular2.d.ts" />

import {View, Component, bootstrap} from 'angular2/angular2';
import {Router, RouterOutlet, RouterLink, RouteConfig, RouteParams, routerInjectables} from 'angular2/router';
import {Home} from './home';
import {Post} from './post';
import {About} from './about';
// Annotation section
@Component({
    selector: 'my-app'
})
@RouteConfig([
    { path: '/home', component: Home, as: 'home'},
    { path: '/post', component: Post, as: 'post'},
    { path: '/about', component: About, as: 'about'}
])
@View({
    template: `<h1>Willkommen im Hardware Shop {{ name }}</h1><br>
    <a router-link="home">Home</a>
    <a router-link="post">Post</a>
    <a router-link="about">About</a><br>
        <router-outlet></router-outlet>
    `,
    directives: [RouterOutlet, RouterLink]
})
// Component controller
export class App {
    name: string;

    constructor() {
        this.name = 'SWE-Versand';
    }

}

bootstrap(App, [routerInjectables]);