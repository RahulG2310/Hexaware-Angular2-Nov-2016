import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

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
import {SortPipe} from './pipes/SortPipe';

@NgModule({
    imports : [BrowserModule, FormsModule],
    bootstrap : [MyAppComponent],
    providers : [BugStorage, BugOperations],
    declarations : [MyAppComponent, BugTracker, BugItem, BugStats, NewBug, MyDatePipe, TrimTextPipe, FilterPipe, SortPipe]
})
export class MyAppModule{

}