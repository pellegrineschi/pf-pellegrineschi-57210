import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-couse-dialog',
  templateUrl: './couse-dialog.component.html',
  styleUrl: './couse-dialog.component.scss'
})
export class CouseDialogComponent {
  courseForm: FormGroup;

  constructor(private fb:FormBuilder, private matDialogRef: MatDialogRef<CouseDialogComponent>){
    
    this.courseForm = this.fb.group({
      name:[null, Validators.required],
      startDate:[],
      endDate:[]

    });
  }
  onSubmit(): void{
    console.log(this.courseForm.value);

    this.matDialogRef.close(this.courseForm.value)
    
  }
}
