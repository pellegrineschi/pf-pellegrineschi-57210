import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { Alumn } from './model';
import { generateId } from '../../shared/utils';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  nombreAlumno = '';

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'startDate',
    'endDate',
    'actions',
  ];
  dataSource: Alumn[] = [
    {
      id: generateId(5),
      name: 'matias',
      lastname: 'pellegrinechi',
      email: 'pellegrineschi86@gmail.com',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: generateId(5),
      name: 'tobias',
      lastname: 'pellegrinechi',
      email: 'pellegrineschi90@gmail.com',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: generateId(5),
      name: 'bautista',
      lastname: 'pellegrinechi',
      email: 'pellegrineschi91@gmail.com',
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog
      .open(StudentsDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          this.nombreAlumno = value.name;
          value['id'] = generateId(5);
          this.dataSource = [...this.dataSource, value];
        },
      });
  }

  editingAlumn(editingAlumn: Alumn) {
    this.matDialog
    .open(StudentsDialogComponent, { data: editingAlumn })
    .afterClosed()
    .subscribe({
      next: (value) => {
        if(!!value){
          this.dataSource = this.dataSource.map((el)=>
          el.id === editingAlumn.id ? {...value, id: editingAlumn.id} : el 
        );
        }
      }
    })
  }

  delteAlumnById(id: string) {
    this.dataSource = this.dataSource.filter((el) => el.id != id);
  }
}
