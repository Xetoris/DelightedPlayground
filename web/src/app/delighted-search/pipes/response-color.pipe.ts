import { Pipe, PipeTransform } from '@angular/core';

/*
 * Transforms a rating number to the appropriate Font-awesome Icon name.
 * Usage:
 *   value | responseIcon
 * Example:
 *   {{ 10 | responseIcon }}
 *   returns: 'grin-hearts'
 */

@Pipe({name: 'responseColor'})
export class ResponseColorPipe implements PipeTransform {
  transform(value: number): string {
    let iconName;

    if (value >= 8) {
      iconName = 'good';
    } else if (value >= 5) {
      iconName = 'okay';
    } else {
      iconName = 'bad'
    }

    return iconName;
  }
}
