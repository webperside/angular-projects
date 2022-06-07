import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?:number) :string | undefined{
    if(!value) return undefined;

    limit = limit ? limit : 20;
    return value.substring(0, limit) + "...";
  }

}
