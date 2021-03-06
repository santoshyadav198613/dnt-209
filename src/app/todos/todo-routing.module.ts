import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { AuthGuard } from '../guards/auth.guard';
import { TodoAddComponent } from './todo-add/todo-add.component';
// import { TodoGuard } from './guards/todo.guard';


const routes: Routes = [
  {
    path: '', component: TodosComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    // resolve : {
    //   todoList : TodoGuard
    // },
    children: [
      { path: 'add', component: TodoAddComponent },
      { path: ':id', component: TodoDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
