import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/Services/todo/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: Todo[] = [];
  todoForm = this.formBuilder.group({
    searchTitle: ['', [Validators.maxLength(25)]],
  });
  
  constructor(private todoService: TodoService, private formBuilder: FormBuilder){}
  ngOnInit(): void {
    
    this.todoList = this.todoService.getTodoList();

  }
  getTasksList() {

    let title = this.todoForm.value.searchTitle ?? "";

    if(title.length > 0) {
      let regex = new RegExp(title, 'i'); 	
      let filtered = this.todoList.filter(item => regex.test(item.title));
      this.todoList = filtered;
    } else {
      this.todoList = this.todoService.getTodoList();
    }
  }

  completeTask(checked: boolean, todoId: number) {

    let item = this.todoList.find(a=>a.id === todoId);

    if (item) {
      item.isCompleted = checked;
      this.todoService.editTodo(item);
      //this.todoService.getTodoList();
    }
  }
  deleteTask(todoId: number) {
    let item = this.todoList.find(a=>a.id === todoId);

    if (item) {
      this.todoService.deleteTodo(item);
      //this.todoService.getTodoList();
    }
  }

}
   