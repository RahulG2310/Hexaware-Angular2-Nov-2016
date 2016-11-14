import {NgModule} from '@angular/core';
import {SortPipe} from './pipes/SortPipe';

@NgModule({
    declarations : [SortPipe],
    exports : [SortPipe]
})
export class UtilsModule{

}