import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itodo } from '../../models/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private _httpclient : HttpClient
  ) { }

  BASE_URL : string = environment.BASE_URL;

  TODOS_URL : string = `${environment.BASE_URL}/todos`


  fetchAllTodos() : Observable<Itodo[]> {
    return this._httpclient.get<Itodo[]>(this.TODOS_URL)
  }

  getCompletedTodos() : Observable<Itodo[]> {
    return this.fetchAllTodos()
                              .pipe(
                                map(arr => {
                                 let completedarr = arr.filter(t => {
                                  return !t.completed
                                 })

                                 return completedarr
                                })
                              
                              )
  }


  getnotCompletedTodos() : Observable<Itodo[]> {
    return this.fetchAllTodos()
    .pipe(
      map(arr => {
        return arr.filter(t => {
          return t.completed
        })
      })
    )
  }


  

}
