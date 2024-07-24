import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CouseDialogComponent } from './components/couse-dialog/couse-dialog.component';
import { Courses } from './models/index.model';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  nombreCurso = '';

  displayedColumns: string[] = ['id', 'name', 'startDate', 'endDate', 'actions'];
  dataSource: Courses[] = [
    {
      id: "1",
      name: "angular",
      startDate: new Date(),
      endDate: new Date()
    },
    {
      id: "2",
      name: "javaScript",
      startDate: new Date(),
      endDate: new Date()
    },
    {
      id: "3",
      name: "java",
      startDate: new Date(),
      endDate: new Date()
    },

  ]
  constructor(private matDialog: MatDialog){}

  openDialog(): void{
    this.matDialog.open(CouseDialogComponent).afterClosed().subscribe({

      next: (value) =>{
        console.log('recivimos este valor: ', value);
        this.nombreCurso = value.name;

        this.dataSource = [...this.dataSource, value]
        
      }
    });
  }

  editCourse(editingCourse: Courses){
    this.matDialog.open(CouseDialogComponent, {data: editingCourse})
  }

  deleteCouseById(id:string){
    this.dataSource = this.dataSource.filter((el)=> el.id != id)
  }
}
