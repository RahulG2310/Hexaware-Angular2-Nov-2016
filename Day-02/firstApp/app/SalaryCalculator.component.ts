import {Component} from '@angular/core'
import {SalaryCalculator} from './SalaryCalculator';

@Component({
    selector : 'salary-calculator',
    templateUrl : 'app/SalaryCalculator.template.html'
})
export class SalaryCalculatorComponent{
   
    calculator:SalaryCalculator = null;

    constructor(){
        this.calculator = new SalaryCalculator();
    }

   
}