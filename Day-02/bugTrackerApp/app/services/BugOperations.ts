import {Injectable} from '@angular/core';
import {Bug} from '../Bug';

@Injectable()
export class BugOperations{
    createNew(id : number, bugName:string) : Bug{
        return {
            id : id,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
    }

    toggle(bug:Bug){
        bug.isClosed = !bug.isClosed;
    }
}