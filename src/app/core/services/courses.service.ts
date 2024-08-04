import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Courses } from '../../features/dashboard/courses/models/index.model';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private my_datebase = [
    {
      id: '1',
      name: 'angular',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '2',
      name: 'javaScript',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '3',
      name: 'java',
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

  getCourses(): Observable<Courses[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.my_datebase);
        observer.complete();
      }, 2000);
    });
  }

  addCourses(courses: Courses): Observable<Courses[]> {
    this.my_datebase.push(courses);
    return this.getCourses() ;
  }

  deleteCoursesById(id: string): Observable<Courses[]> {
    this.my_datebase = this.my_datebase.filter((el)=>el.id != id);
    return this.getCourses()
  }

  editCourseById(id: string, update: Courses){
    this.my_datebase = this.my_datebase.map((el)=>
    el.id === id
    ?{...update, id}
    : el
    )
    return this.getCourses();

  }

  getCousesById(id:string):Observable<Courses | undefined>{
    return this.getCourses().pipe(
      map((allCouses)=>allCouses.find((el)=> el.id === id))
    );
  }
}
