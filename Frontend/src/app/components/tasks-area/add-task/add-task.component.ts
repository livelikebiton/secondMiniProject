import { HttpClient } from '@angular/common/http';
import { TaskModel } from './../../../models/task.model';
import { MemberModel } from './../../../models/member.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

    public members: MemberModel[];
    public task: TaskModel = new TaskModel();

    constructor(private http: HttpClient, private myRouter: Router) { }

    async ngOnInit() {
        try {
            this.members = await this.http.get<MemberModel[]>(environment.membersUrl).toPromise();
        }
        catch (err) {
            alert(err.message);
        }
    }

    
    @ViewChild("taskForm")
    public myFormRef: ElementRef<HTMLFormElement>;

    public async addTask() {
        const isValid = this.myFormRef.nativeElement.checkValidity();
        if(!isValid) {
            alert("Missing details.");
            return;
        }
        try {
            this.task.taskDate = new Date();
            this.task = await this.http.post<TaskModel>(environment.tasksUrl, this.task).toPromise();
            alert("task was add!");
            this.myRouter.navigateByUrl("/tasks");
        }
        catch (err) {
            alert (err.message);
        }
    }
}