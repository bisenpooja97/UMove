import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapBox'
})
export class MapBoxPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
