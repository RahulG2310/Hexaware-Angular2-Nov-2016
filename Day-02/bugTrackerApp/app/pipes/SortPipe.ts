import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform{
    transform(data, attrName, descending = false){
        console.log(descending);
        var bugComparer = createComparerFor(attrName);
        var comparer = descending ? negate(bugComparer) : bugComparer;

        var result =  data.sort(comparer);
        console.table(result);
        return result;
    }
}
function createComparerFor(attrName){
    return function bugComparer(bug1, bug2){
        var result = 0;
        if (bug1[attrName] < bug2[attrName]){
            result = -1;
        } else if (bug1[attrName] === bug2[attrName]){
            result = 0;
        } else {
            result = 1;
        }
        var v1 = bug1[attrName],
            v2 = bug2[attrName];
        console.log(`comparing '${v1}', '${bug2[attrName]}', returning ${result}`);
        return result;
    }
}

function negate(criteriaFn){
    return function(){
        var negateResult =  -1 * criteriaFn.apply(this, arguments);
        console.log('negateResult = ', negateResult);
        return negateResult;
    }
}