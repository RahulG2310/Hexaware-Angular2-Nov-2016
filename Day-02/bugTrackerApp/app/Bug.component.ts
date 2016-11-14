import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Bug} from './Bug';

@Component({
    selector : 'bug-item',
    template : `<span class="bugname" [ngClass]="{closed : data.isClosed}" (click)="toggle()">{{data.name | trimText:25}}</span>
					<div class="datetime">{{data.createdAt | myDate}}</div>`
})
export class BugItem{
    
    @Input() 
    data : Bug;

    @Output()
    toggleBugEvent : EventEmitter<Bug> = new EventEmitter<Bug>();

    toggle(){
        this.toggleBugEvent.emit(this.data);
    }
}