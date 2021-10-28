import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytesToHumanReadable',
})
export class BytesToHumanReadablePipe implements PipeTransform {
  transform(bytes, ...args: unknown[]): unknown {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const decimals = 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const index = Math.floor(Math.log(bytes) / Math.log(k));

    return (
      parseFloat((bytes / Math.pow(k, index)).toFixed(decimals)) +
      ' ' +
      sizes[index]
    );
  }
}
