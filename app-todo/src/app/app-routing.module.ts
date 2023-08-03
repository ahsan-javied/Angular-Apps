import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { TodoComponent } from './Components/todo/todo.component';
import { TodoListComponent } from './Components/todo/todo-list/todo-list.component';
import { TodoFormComponent } from './Components/todo/todo-form/todo-form.component';
const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'task', component: TodoComponent },
// { path: 'task/add', component: TodoFormComponent },
// { path: 'task/list', component: TodoListComponent },
];
@NgModule({
imports: [CommonModule, RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }