import {Component, Input} from '@angular/core'
import {Bug} from './Bug';

@Component({
    selector : 'bug-stats',
    template : `<section class="stats">
			<span class="closed">{{getClosedCount()}}</span>
			<span> / </span>
			<span>{{data.length}}</span>
		</section>`
})
export class BugStats{
    @Input()
    data:Array<Bug>;

    getClosedCount(){
        return (this.data.filter(bug => bug.isClosed)).length;
    }
}