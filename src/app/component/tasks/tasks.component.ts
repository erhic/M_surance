import { Component, OnInit } from '@angular/core';
import{ AllTasks } from  'src/app/alltask'
import { Task } from 'src/app/task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[]= AllTasks;
  constructor() { }

  ngOnInit(): void {
  }

}
