import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  getTodoList(): Todo[]{
    return this.todos.sort();
  }
  addTodo(todo: Todo): void{
    this.todos.push(todo);
  }

  editTodo(todo: Todo): void{
    const index= this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos[index] = todo;
    }
  }

  deleteTodo(todo: Todo): void{
    const index= this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}