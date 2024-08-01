import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Enrollments } from '../../features/dashboard/enrollments/model';
import { generateId } from '../../features/shared/utils';

@Injectable({ providedIn: 'root' })
export class EnrollmentsService {
  private mi_DataBase: Enrollments[] = [
    {
      studentsID: generateId(3),
      courseID: generateId(3),
    },
    {
      studentsID: generateId(3),
      courseID: generateId(3),
    },
    {
      studentsID: generateId(3),
      courseID: generateId(3),
    },
  ];

  getEnrollments(): Observable<Enrollments[]> {
    return of<Enrollments[]>(this.mi_DataBase).pipe(delay(400));
  }

  addEnrollments(): Observable<Enrollments[]> {
    this.mi_DataBase.push({
        studentsID: generateId(3),
        courseID: generateId(3)
    })
    return this.getEnrollments()
  }

  
}
