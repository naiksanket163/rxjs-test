import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfService {

  constructor() { }


  of$ : Observable<string[]> = of (["Angular", "Javascript", "Rxjs", "Css", "signals"])

  num$ : Observable<number[]> = of ([1,2,3,4,5,6,7,8,9,10])




  itsEven$ = this.num$.pipe(
    map(val => {
      return val.filter(num => {
        return num % 2 === 0
      })
    })
  )

  odd$ = this.num$.pipe(
    map(num => {
      return num.filter(number => {
        return number % 2 !== 0
      })
    })
  )

  strArr$ = this.of$.pipe(
    map(arr => {
      return arr.map(val => {
        return `I Love ${val}`
      })
    })
  )

  



}

