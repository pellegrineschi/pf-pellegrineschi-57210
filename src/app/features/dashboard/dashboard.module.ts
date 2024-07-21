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
import { StudentsModule } from './students/students.module';









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
    MatListModule,
    StudentsModule
    
]
})
export class DashboardModule { }
