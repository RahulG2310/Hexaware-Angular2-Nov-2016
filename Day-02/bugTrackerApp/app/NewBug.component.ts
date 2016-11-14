import {Component, Output, EventEmitter} from '@angular/core'
import {Bug} from './Bug';

@Component({
    selector : 'new-bug',
    template : `<section class="new">
			<label for="">Bug :</label>
			<input type="text" #txtBug>
			<input type="button" value="Add New" (click)="AddNew(txtBug)">
		</section>`
})
export class NewBug{
	@Output()
	onNewBug : EventEmitter<string> = new EventEmitter<string>();

    AddNew(txtBug){
		
		this.onNewBug.emit(txtBug.value);

	}
}