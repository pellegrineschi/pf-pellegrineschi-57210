import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CouseDialogComponent } from './components/couse-dialog/couse-dialog.component';
import { Courses } from './models/index.model';
import { generateId } from '../../shared/utils';
import { CoursesService } from '../../../core/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  nombreCurso = '';

  displayedColumns: string[] = [
    'id',
    'name',
    'startDate',
    'endDate',
    'actions',
  ];
  dataSource: Courses[] = [];

  isLoading = false;

  constructor(
    private matDialog: MatDialog,
    private coursesService: CoursesService
  ) {}
  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.isLoading = true;
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.dataSource = courses;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  openDialog(): void {
    this.matDialog
      .open(CouseDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          console.log('recivimos este valor: ', value);
          this.nombreCurso = value.name;

          value['id'] = generateId(5);

          this.isLoading = true;

          this.coursesService.addCourses(value).subscribe({
            next: (courses) => {
              this.dataSource = [...courses];
            },
            complete: () => {
              this.isLoading = false;
            },
          });
        },
      });
  }

  editCourse(editingCourse: Courses) {
    this.matDialog
      .open(CouseDialogComponent, { data: editingCourse })
      .afterClosed()
      .subscribe({
        next: (value) => {
          if (!!value) {
            this.coursesService.editCourseById(editingCourse.id, value).subscribe({
              next: (courses)=>{
                this.dataSource =[...courses]
              }
            })
          }
        },
      });
  }

  deleteCouseById(id: string) {
    if (confirm('estas seguro?')) {
      this.isLoading = true;
      this.coursesService.deleteCoursesById(id).subscribe({
        next: (courses) => {
          this.dataSource = [...courses];
        },

        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
}
