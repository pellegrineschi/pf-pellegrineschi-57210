import { Component } from '@angular/core';
import { EnrollmentsService } from '../../../core/services/enrollments.service';
import { Observable } from 'rxjs';
import { Enrollments } from './model';
import { notifierService } from '../../../core/services/notifier.service';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss'
})
export class EnrollmentsComponent {

  enrollments$: Observable<Enrollments[]>;
  enrollments: Enrollments[] = [];

  constructor(private enrollmentsService: EnrollmentsService, private notifyService: notifierService){
    this.enrollments$ = this.enrollmentsService.getEnrollments();
  }

  addEnrollment(): void{
    this.enrollmentsService.addEnrollments().subscribe({
      next: (v)=>(this.enrollments = v)
    });

    this.notifyService.sendNotification('se agrego una inscripcion')
  }
}
