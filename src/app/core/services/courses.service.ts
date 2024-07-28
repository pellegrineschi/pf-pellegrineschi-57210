import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Courses } from "../../features/dashboard/courses/models/index.model";

@Injectable({providedIn: 'root'})
export class CoursesService {

    getCourses(): Observable<Courses[]>{

        return new Observable((observer)=>{
            setTimeout(()=>{
                observer.next([
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
                ]);
                observer.complete();
            },2000);
        })
    }
}