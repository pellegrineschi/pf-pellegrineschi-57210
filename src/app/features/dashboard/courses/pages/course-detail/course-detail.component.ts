import { Component } from '@angular/core';
import { CoursesService } from '../../../../../core/services/courses.service';
import { Observable } from 'rxjs';
import { Courses } from '../../models/index.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent {

  curso$: Observable<Courses | undefined>

  constructor(private coursesService: CoursesService, private activatedRoute: ActivatedRoute){
    this.curso$ = this.coursesService.getCousesById(
      this.activatedRoute.snapshot.params['id']
    )
  }
}
