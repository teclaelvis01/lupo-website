import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingComponent } from './coming.component';
import { ComingRoutingModule } from './coming-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComingRoutingModule
  ],
  declarations: [ComingComponent]
})
export class ComingModule { }
