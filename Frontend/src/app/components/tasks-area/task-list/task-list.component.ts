import { TaskModel } from './../../../models/task.model';
import { MemberModel } from './../../../models/member.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    public members: MemberModel[];
    public tasks: TaskModel[];

    constructor(private http: HttpClient, private myRouter: Router) { }

    async ngOnInit() {
        try {
            this.tasks = await this.http.get<TaskModel[]>(environment.tasksUrl).toPromise();
        }
        catch (err) {
            alert(err.message);
        }
    }

    public async deleteTask(_id: string) {
        try {
            const doIt = window.confirm("are you sure?");
            if (!doIt) return;
            await this.http.delete(environment.tasksUrl + _id).toPromise();
            const index = this.tasks.findIndex(t => t._id === _id);
            this.tasks.splice(index, 1);
            alert("delete task successfully");
        }
        catch (err) {
            alert(err.message);
        }
    }
}
