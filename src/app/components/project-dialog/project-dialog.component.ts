import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';
import { Project } from 'src/interfaces/interface';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit {
  formGroup: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {card: Project, edit: boolean},
  private dialogRef: MatDialogRef<ProjectDialogComponent>,
  public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      Name: ['', Validators.required]
    });
  }

  onClickSubmit(data) {
    this.dialogRef.close(data);
  }

}
