import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetComponent } from './target/target.component';
import { RingComponent } from './ring/ring.component';
import { RingCircleComponent } from './ring-circle/ring-circle.component';
import { RingTextComponent } from './ring-text/ring-text.component';
import { ShotComponent } from './shot/shot.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    TargetComponent,
    RingComponent,
    RingCircleComponent,
    RingTextComponent,
    ShotComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TargetComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class TargetModule { }
