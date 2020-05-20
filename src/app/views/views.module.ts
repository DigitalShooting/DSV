import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFittextModule } from 'angular-fittext';

import { DSVComponent } from './dsv/dsv.component';
import { DscMiniComponent } from './dsc-mini/dsc-mini.component';
import { DscFullComponent } from './dsc-full/dsc-full.component';
import { TeamMiniComponent } from './team-mini/team-mini.component';

import { DscModule } from './dsc/dsc.module';

@NgModule({
  declarations: [    
    DSVComponent,
    DscMiniComponent, DscFullComponent, TeamMiniComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule, AngularFittextModule,
    DscModule,
  ],
  exports: [
    DSVComponent,
    DscModule,
  ],
})
export class ViewsModule { }
