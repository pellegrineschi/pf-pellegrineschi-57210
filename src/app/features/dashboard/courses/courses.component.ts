import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CouseDialogComponent } from './components/couse-dialog/couse-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  nombreCurso = '';

  constructor(private matDialog: MatDialog){}

  openDialog(): void{
    this.matDialog.open(CouseDialogComponent).afterClosed().subscribe({

      next: (value) =>{
        console.log('recivimos este valor: ', value);
        this.nombreCurso = value.name;
        
      }
    });
  }
}
