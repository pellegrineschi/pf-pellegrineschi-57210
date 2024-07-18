import { Component, Inject,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Courses } from '../../models/index.model';

@Component({
  selector: 'app-couse-dialog',
  templateUrl: './couse-dialog.component.html',
  styleUrl: './couse-dialog.component.scss',
})
export class CouseDialogComponent {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CouseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingCourse?: Courses 
  ) {
    this.courseForm = this.fb.group({
      name: [null, Validators.required],
      startDate: [],
      endDate: [],
    });

    if(this.editingCourse){
      this.courseForm.patchValue(this.editingCourse)
    }
  }
  onSubmit(): void {
    console.log(this.courseForm.value);

    this.matDialogRef.close(this.courseForm.value);
  }
}
