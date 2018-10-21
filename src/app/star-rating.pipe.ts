import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const stars = Math.max(0, Math.min( Math.round(value), 5));
    let i;
    let result = '';
    for (i = 0; i < stars; i++) {
      result += '\u2605';
    }
    for (i = stars; i < 5; i++) {
      result += '\u2606';
    }
    return result;
  }

}
