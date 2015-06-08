/**
 * Created by Sven on 08.06.2015.
 */
/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2', 'angular2/router', './home', './post', './about'], function (require, exports, angular2_1, router_1, home_1, post_1, about_1) {
    // Annotation section
    var App = (function () {
        function App() {
            this.name = 'SWE-Versand';
        }
        App = __decorate([
            angular2_1.Component({
                selector: 'my-app'
            }),
            router_1.RouteConfig([
                { path: '/home', component: home_1.Home, as: 'home' },
                { path: '/post', component: post_1.Post, as: 'post' },
                { path: '/about', component: about_1.About, as: 'about' }
            ]),
            angular2_1.View({
                template: "<h1>Willkommen im Hardware Shop {{ name }}</h1><br>\n    <a router-link=\"home\">Home</a>\n    <a router-link=\"post\">Post</a>\n    <a router-link=\"about\">About</a><br>\n        <router-outlet></router-outlet>\n    ",
                directives: [router_1.RouterOutlet, router_1.RouterLink]
            })
        ], App);
        return App;
    })();
    exports.App = App;
    angular2_1.bootstrap(App, [router_1.routerInjectables]);
});
