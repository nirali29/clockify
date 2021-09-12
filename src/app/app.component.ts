import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/interfaces/interface';
import { ProjectDialogComponent } from './components/project-dialog/project-dialog.component';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project';
  projects = [];
  constructor(private _dialog: MatDialog, private _projectService: ProjectsService) {
    this.projects = this._projectService.getProjects();
  }

  addProject() {
    this._dialog.open(ProjectDialogComponent, {data: {}, width: '500px'})
      .afterClosed()
      .subscribe(newCardData => {
        console.log(newCardData);
        this.projects.push(newCardData);
        console.log(this.projects);
        // if (newCardData) {
        //   list.cards? list.cards.unshift(newCardData): list.cards = [newCardData];
        // }
        // this.saveData();
      });
}

}
