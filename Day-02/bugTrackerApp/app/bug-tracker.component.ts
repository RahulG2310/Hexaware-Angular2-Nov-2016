import {Component} from '@angular/core';
import {Bug} from './Bug';

@Component({
    templateUrl : 'app/bug-tracker.template.html',
    selector : 'bug-tracker'
})
export class BugTracker{
    bugs : Array<Bug> = [
        {id : 1, name : 'Bug - 1', isClosed:false, createdAt : new Date("10-Nov-2016")},
        {id : 2, name : 'Bug - 2', isClosed:true, createdAt : new Date("13-Nov-2016")},
    ];

    AddNew(newBug:Bug){
        this.bugs.push(newBug);
    }

    
    
}