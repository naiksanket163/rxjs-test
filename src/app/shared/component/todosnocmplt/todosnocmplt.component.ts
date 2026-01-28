import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todoservice/todo.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todosnocmplt',
  templateUrl: './todosnocmplt.component.html',
  styleUrls: ['./todosnocmplt.component.scss']
})
export class TodosnocmpltComponent implements OnInit {

  todoArr! : Array<Itodo>

  constructor(
    private _todosservice : TodoService
  ) { }

  ngOnInit(): void {

    this._todosservice.getCompletedTodos()
    .subscribe(res => {
      this.todoArr=res
    })
  }

}
