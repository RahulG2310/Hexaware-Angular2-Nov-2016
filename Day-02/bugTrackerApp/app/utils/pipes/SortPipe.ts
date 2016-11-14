import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'sort',
    pure : false
})
export class SortPipe implements PipeTransform{
    transform(data, attrName, descending = false){
       var dataComperer = createComparerFor(attrName);
        var comparer = descending ? negate(dataComperer) : dataComperer;

        return data.sort(comparer);
        
    }
}
function createComparerFor(attrName){
    return function(item1, item2){
       
        if (item1[attrName] < item2[attrName]){
            return -1;
        } 
        if (item1[attrName] === item2[attrName]){
            return  0;
        } 
        return 1;
        
    }
}

function negate(criteriaFn){
    return function(){
        var negateResult =  -1 * criteriaFn.apply(this, arguments);
        return negateResult;
    }
}