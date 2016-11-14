import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UtilsModule} from './utils/utils.module';

import {BrowserModule} from '@angular/platform-browser';
import {MyAppComponent} from './app.component';
import {BugTracker} from './bug-tracker.component';
import {BugItem} from './Bug.component';
import {BugStats} from './BugStat.component'
import {NewBug} from './NewBug.component';
import {MyDatePipe} from './pipes/MyDatePipe';
import {TrimTextPipe} from './pipes/TrimTextPipe';
import {BugStorage} from './services/BugStorage';
import {BugOperations} from './services/BugOperations';
import {FilterPipe} from './pipes/FilterPipe';


@NgModule({
    imports : [BrowserModule, FormsModule, UtilsModule],
    bootstrap : [MyAppComponent],
    providers : [BugStorage, BugOperations],
    declarations : [MyAppComponent, BugTracker, BugItem, BugStats, NewBug, MyDatePipe, TrimTextPipe, FilterPipe]
})
export class MyAppModule{

}