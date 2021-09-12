import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/interfaces/interface';
import { ProjectsService } from '../../projects.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // projects: Project[] = [];
  @Input() projects;
  ticks = 0;
  constructor(private _projectService: ProjectsService) { }

  ngOnInit(): void {
    let timer = Observable.timer(2000,1000);
    timer.subscribe(t=>this.ticks = t);
    console.log(this.projects);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  startTimer(project) {

  }

  stopProject(project) {

  }

}
