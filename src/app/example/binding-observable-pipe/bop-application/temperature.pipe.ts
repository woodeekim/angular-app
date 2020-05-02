import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform{
  transform(value: any, fromTo: string): any {
    if (!fromTo) {
      throw new Error('파이프에서 throw 던짐');
    }
    return (fromTo === 'FtoC') ?
      (value - 32) * 5.0 / 9.0 :  // F to C
      (value * 9.0) / 5.0 + 32;  // C to F
  }
}
