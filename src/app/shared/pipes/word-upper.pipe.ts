import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordUpper'
})
export class WordUpperPipe implements PipeTransform {

  // transform(value: string, wordPart1: string, wordPart2: string): string {
  transform(value: string, wordParts: string[]): string {
    let result: string = value;
    // [wordPart1, wordPart2].forEach(item=>{
    wordParts.forEach(item=>{
      result =  result.replace(new RegExp('[А-Яа-я]*'+item+'[а-я]*', 'g'), (match: string)=>{return match.toUpperCase()});
    })
    // return value.replace(new RegExp('[А-Яа-я]*'+wordPart+'[а-я]*', 'g'), (match: string)=>{return match.toUpperCase()});
    return result;
  }

  

}
