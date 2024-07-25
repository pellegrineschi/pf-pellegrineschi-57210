import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './pipes/fullname.pipe';
import { TitulosDirective } from './directives/titulos.directive';





@NgModule({
  declarations: [
    FullnamePipe,
    TitulosDirective
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [FullnamePipe,TitulosDirective]
})
export class Shared1Module { }
