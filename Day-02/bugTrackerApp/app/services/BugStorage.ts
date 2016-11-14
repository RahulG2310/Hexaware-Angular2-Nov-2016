import {Injectable} from '@angular/core';
import {BugOperations} from './BugOperations';

@Injectable()
export class BugStorage{
    currentId  : number = 0;

    bugOperations:BugOperations = null;
    
    constructor(bugOperations : BugOperations){
        this.bugOperations = bugOperations;
    }
    
    getAll(){
        let list = [];
        for(let i =0; i < window.localStorage.length; i++){
            let key = window.localStorage.key(i);
            let dataAsString = window.localStorage.getItem(key);
            let bug = JSON.parse(dataAsString);
            list.push(bug);
            this.currentId = this.currentId > bug.id ? this.currentId : bug.id;
        } 
        return list;
    }
    addNew(bugName){
        var newBug = this.bugOperations.createNew(++this.currentId, bugName);
        window.localStorage.setItem(newBug.id.toString(), JSON.stringify(newBug));
        return newBug;
    }
    toggle(bug){
        this.bugOperations.toggle(bug);
        window.localStorage.setItem(bug.id.toString(), JSON.stringify(bug));
    }
    remove(bug){
        window.localStorage.removeItem(bug.id.toString());
    }
}