import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
    transform(data, trimLength){
        return data.length <= trimLength ? data : data.substr(0,trimLength) + '...';
    }
}