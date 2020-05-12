import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFittextModule } from 'angular-fittext';

import { DSVComponent } from './dsv/dsv.component';
import { TargetModule } from './target/target.module';
import { DscMiniComponent } from './dsc-mini/dsc-mini.component';
import { TeamMiniComponent } from './team-mini/team-mini.component';

import { NavbarsModule } from './navbars/navbars.module';
import { InfoModule } from './info/info.module';
import { DscComponent } from './dsc/dsc.component';

@NgModule({
  declarations: [
    DscComponent,
    DSVComponent,
    DscMiniComponent, TeamMiniComponent,
  ],
  imports: [
    CommonModule, TargetModule,
    FlexLayoutModule, AngularFittextModule,
    NavbarsModule, InfoModule,
  ],
  exports: [
    DscComponent, DSVComponent, TargetModule,
  ],
})
export class ViewsModule { }
