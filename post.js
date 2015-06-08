if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var Post = (function () {
        function Post() {
            this.posts = ["Sven(08.06.2015 15:32):Hallo wie gehts", "Andreas(08.06.2015 15:37):Gut und dir?", "Max(08.06.2015 15:40):Wo seid ihr?"];
        }
        Post.prototype.addMessage = function (message) {
            this.posts.push(message);
        };
        Post.prototype.doneTyping = function ($event) {
            if ($event.which === 13) {
                this.addMessage($event.target.value);
                $event.target.value = null;
            }
        };
        Post.prototype.transform = function (value) {
            return JSON.stringify(value, null, 2);
        };
        Post = __decorate([
            angular2_1.Component({
                selector: 'post'
            }),
            angular2_1.View({
                template: "<h1>Pinnwand</h1></br>\n\n    <ul>\n         <li *for=\"#post of posts\">\n            {{ post }}\n         </li>\n    </ul>\n\n\n <input #messageText (keyup)=\"doneTyping($event)\">\n   <button (click)=\"addMessage(messageText.value)\">Send</button>\n\n\n\n    ",
                directives: [angular2_1.For, angular2_1.If]
            })
        ], Post);
        return Post;
    })();
    exports.Post = Post;
    angular2_1.bootstrap(Post);
});
