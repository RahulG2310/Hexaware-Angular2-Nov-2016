import {Component, Input} from '@angular/core';
import {Bug} from './Bug';

@Component({
    selector : 'bug-item',
    template : `<span class="bugname" [ngClass]="{closed : data.isClosed}" (click)="toggle()">{{data.name}}</span>
					<div class="datetime">{{data.createdAt}}</div>`
})
export class BugItem{
    
    @Input() 
    data : Bug;

    toggle(){
        this.data.isClosed = !this.data.isClosed;
    }
}