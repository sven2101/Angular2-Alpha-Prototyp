if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var Products = (function () {
        function Products() {
            this.produkt = this.transform('data/product.json');
        }
        Products.prototype.transform = function (value) {
            return JSON.stringify(value, null, 2);
        };
        Products = __decorate([
            angular2_1.Component({
                selector: 'products'
            }),
            angular2_1.View({
                template: "<h1>Products</h1></br>Produkt: {{ produkt }}"
            })
        ], Products);
        return Products;
    })();
    exports.Products = Products;
});
