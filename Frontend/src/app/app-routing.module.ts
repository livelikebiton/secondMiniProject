import { AddTaskComponent } from './components/tasks-area/add-task/add-task.component';
import { TaskListComponent } from './components/tasks-area/task-list/task-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: "tasks", component: TaskListComponent },
    { path: "add-task", component: AddTaskComponent },
    { path: "", redirectTo: "/tasks", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
