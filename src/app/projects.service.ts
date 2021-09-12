import { Injectable } from '@angular/core';
import { Project } from 'src/interfaces/interface';
import * as SAMPLE_DATA from 'src/assets/sample-projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = (SAMPLE_DATA as any).default;
  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }
}
