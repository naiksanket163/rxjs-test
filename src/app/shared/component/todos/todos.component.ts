import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todoservice/todo.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todoArr! : Array<Itodo>

  constructor(
    private _todoservice : TodoService
  ) { }

  ngOnInit(): void {

    this._todoservice.fetchAllTodos()
    .subscribe(res => {
    this.todoArr=res
    })
  }

  trackById(index : number, todo : Itodo){
    return todo.id
  }

}
