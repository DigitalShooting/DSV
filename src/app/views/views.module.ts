import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFittextModule } from 'angular-fittext';

import { DSVComponent } from './dsv/dsv.component';
// import { TargetModule } from './target/target.module';
import { DscMiniComponent } from './dsc-mini/dsc-mini.component';
import { TeamMiniComponent } from './team-mini/team-mini.component';

import { DscModule } from './dsc/dsc.module';

@NgModule({
  declarations: [    
    DSVComponent,
    DscMiniComponent, TeamMiniComponent,
  ],
  imports: [
    CommonModule,
    // TargetModule,
    FlexLayoutModule, AngularFittextModule,
    DscModule,
  ],
  exports: [
    DSVComponent,
    // TargetModule,
    DscModule,
  ],
})
export class ViewsModule { }
