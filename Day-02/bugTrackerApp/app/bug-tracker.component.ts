import {Component} from '@angular/core';
import {Bug} from './Bug';

@Component({
    templateUrl : 'app/bug-tracker.template.html',
    selector : 'bug-tracker'
})
export class BugTracker{
    bugs : Array<Bug> = [];

    AddNew(newBug:Bug){
        this.bugs.push(newBug);
    }

    
    
}