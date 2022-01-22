import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReqresTableComponent } from './component/reqres-table.component';

const routes: Routes = [

  { path: '', component: ReqresTableComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReqresTableRoutingModule { }
