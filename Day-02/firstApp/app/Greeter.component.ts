import {Component} from '@angular/core'

@Component({
    selector : 'greeter',
    template : `<div>
                <label> Name :</label>
                <input type="text" [(ngModel)]="name"/>
                <input type="button" value="Greet" (click)="greet()"/>
                <div>{{message}}</div>
                </div>`
})
export class Greeter{
    message : string = 'A greeter component rendered';
    name : string = '';
    greet(){
       this.message = `Hi ${this.name}, Welcomet to Angular 2.0!`;
    }
}