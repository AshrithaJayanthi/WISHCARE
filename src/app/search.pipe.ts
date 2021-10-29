import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(hsptls: any[], SearchTerm: string): unknown[] {
    if (!hsptls || !SearchTerm)
      return hsptls;
    else
    {
      return hsptls.filter(hsptlObj=>hsptlObj.hsptlAddress.toLowerCase().indexOf(SearchTerm.toLowerCase())!==-1)
    }
  }

}