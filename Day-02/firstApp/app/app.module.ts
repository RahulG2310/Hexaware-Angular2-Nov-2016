import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SalaryCalculatorComponent} from './SalaryCalculator.component';
import {MyAppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {Greeter} from './Greeter.component';

@NgModule({
    imports : [BrowserModule, FormsModule],
    bootstrap : [MyAppComponent],
    declarations : [MyAppComponent, Greeter, SalaryCalculatorComponent]
})
export class MyAppModule{

}