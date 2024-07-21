import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumn } from '../../model';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrl: './students-dialog.component.scss',
})
export class StudentsDialogComponent {
  alumnForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<StudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingAlumn? : Alumn
  ) {
    this.alumnForm = this.fb.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      startDate: [],
      endDate: [],
    });

    console.log("editando: ", this.editingAlumn);
    
    // if(this.editingAlumn){
    //    this.alumnForm.patchValue(this.editingAlumn);
    //  }
    
  }

  
  onSubmit(): void {
    this.matDialogRef.close(this.alumnForm.value);
  }
}
