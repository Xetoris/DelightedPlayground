import { Pipe, PipeTransform } from '@angular/core';

/*
 * Transforms a rating string to the appropriate Font-awesome Icon name.
 * Usage:
 *   value | responseIcon
 * Example:
 *   {{ 'good' | responseIcon }}
 *   returns: 'fa-grin-hearts'
 */

@Pipe({name: 'responseIcon'})
export class ResponseIconPipe implements PipeTransform {
  transform(value: string): string {
    let iconName;

    let testVal = value != null ? value.toLowerCase() : value;
    if (testVal == 'good') {
      iconName = 'fa-grin-stars';
    } else if (testVal == 'bad') {
      iconName = 'fa-sad-tear';
    } else {
      iconName = 'fa-meh'
    }

    return iconName;
  }
}
