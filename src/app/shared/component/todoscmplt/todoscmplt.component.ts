import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todoservice/todo.service';
import { Itodo } from '../../models/todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todoscmplt',
  templateUrl: './todoscmplt.component.html',
  styleUrls: ['./todoscmplt.component.scss']
})
export class TodoscmpltComponent implements OnInit {

  todoArrObs$! : Observable<Itodo[]>

  constructor(
    private _todoservice : TodoService
  ) { }

  ngOnInit(): void {
    this.todoArrObs$ = this._todoservice.getnotCompletedTodos()
  }

}
