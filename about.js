if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var About = (function () {
        function About() {
        }
        About = __decorate([
            angular2_1.Component({
                selector: 'about'
            }),
            angular2_1.View({
                template: "<h1>Impressum</h1></br></br>Sven Jaschkewitz</br>Bismarckstrasse 55</br> 71633 Karlsruhe"
            })
        ], About);
        return About;
    })();
    exports.About = About;
});
