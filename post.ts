/**
 * Created by Sven on 08.06.2015.
 */
import {View, Component, bootstrap, For, If} from 'angular2/angular2';

@Component({
    selector: 'post'
})
@View({
    template: `<h1>Pinnwand</h1></br>

    <ul>
         <li *for="#post of posts">
            {{ post }}
         </li>
    </ul>


 <input #messageText (keyup)="doneTyping($event)">
   <button (click)="addMessage(messageText.value)">Send</button>



    `,
    directives: [For,If]
})

export class Post {


    posts:Array<string>;

    constructor() {

        this.posts=["Sven(08.06.2015 15:32):Hallo wie gehts","Andreas(08.06.2015 15:37):Gut und dir?","Max(08.06.2015 15:40):Wo seid ihr?"];

    }

    addMessage(message: string) {
        this.posts.push(message);
    }
    doneTyping($event) {
        if($event.which === 13) {
            this.addMessage($event.target.value);
            $event.target.value = null;
        }
    }

    transform(value):string {
        return JSON.stringify(value, null, 2);
    }

}

bootstrap(Post);