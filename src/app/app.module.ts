import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { AuthModule } from './features/auth/auth.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AuthModule,
    SharedModule
    

  ],
  providers: [
    provideAnimationsAsync(), provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
