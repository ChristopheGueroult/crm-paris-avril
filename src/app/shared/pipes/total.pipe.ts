import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, args?: any): any {
    if (value) {
      if (args) {
        return value.totalTTC(args);
      }
      return value.totalHT();

    }
    return null;
  }

}
