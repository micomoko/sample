import { Pipe } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string, args: number) : string {

    let limit = args > 0 ? args : 40;

    if(isNaN(limit)){
    	limit = 40;
    }

    let trail = '...';

    if(!value){
    	return '';
    }

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}