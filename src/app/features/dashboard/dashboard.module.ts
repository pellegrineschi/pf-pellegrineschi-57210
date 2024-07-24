import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CoursesModule } from './courses/courses.module';
import {MatListModule} from '@angular/material/list';
<<<<<<< HEAD
import { StudentsModule } from './students/students.module';
import { SharedModule } from '../../shared/shared.module';

=======
>>>>>>> parent of 2304e60 (alumnos)








@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports:[DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    CoursesModule,
<<<<<<< HEAD
    MatListModule,
    StudentsModule,
    SharedModule
    
]
=======
    MatListModule
  ]
>>>>>>> parent of 2304e60 (alumnos)
})
export class DashboardModule { }
