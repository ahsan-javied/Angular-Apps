import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/Services/todo/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  //todoForm: FormGroup | undefined;
  todoForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    description: ['', [Validators.maxLength(100)]],
  });

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      description: ['', [Validators.maxLength(100)]],
    });
  }

  f() { return this.todoForm.controls; }
  
  addTasks() {

    if (this.todoForm.valid) {
      this.todoService.addTodo({
        id: this.todoService.getTodoList().length + 1,
        title: this.todoForm.value.title ?? "",
        description: this.todoForm.value.description ?? "",
        isCompleted: false,
      });
      this.todoForm.reset();
    }
  }

}
