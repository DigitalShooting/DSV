import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

import { DSVComponent } from './dsv/dsv.component';
import { TargetModule } from './target/target.module';
import { DscMiniComponent } from './dsc-mini/dsc-mini.component';


@NgModule({
  declarations: [
    DSVComponent,
    DscMiniComponent,
  ],
  imports: [
    CommonModule, TargetModule,
    FlexLayoutModule,
  ],
  exports: [
    DSVComponent, TargetModule,
  ],
})
export class ViewsModule { }
