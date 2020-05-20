import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DSVComponent } from './views/dsv/dsv.component';
import { DscFullComponent } from './views/dsc-full/dsc-full.component';

const routes: Routes = [
  { path: "", component: DSVComponent },
  { path: ":lineID", component: DscFullComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
