import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'humanized'
})
export class HumanizedPipe implements PipeTransform {

  transform(date: Date, args?: any): any {
    return moment(date).fromNow();
  }

}
