import {Component, OnInit} from '@angular/core';
import {Bug} from './Bug';
import {BugStorage} from './services/BugStorage';

@Component({
    templateUrl : 'app/bug-tracker.template.html',
    selector : 'bug-tracker'
})
export class BugTracker implements OnInit{
    bugs : Array<Bug> = [
        
    ];
    bugStorage : BugStorage;

    constructor(bugStorage : BugStorage){
        this.bugStorage = bugStorage;
    }

    ngOnInit(){
        this.bugs = this.bugStorage.getAll();
    }
    AddNew(newBugName:string){
        var newBug = this.bugStorage.addNew(newBugName);
        this.bugs.push(newBug);
    }

    
    
}