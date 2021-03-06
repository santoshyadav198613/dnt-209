import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { PhotosComponent } from './photos/photos.component';
import { APP_CONFIG, APP_VALUE } from '../valueProvider/config.service';
import { todoProvider } from './todo.factory';

@NgModule({
  declarations: [TodosComponent, TodoAddComponent,
    TodoListComponent, TodoDetailsComponent,
    PhotosComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule
  ],
  providers: [todoProvider]
})
export class TodosModule { }
