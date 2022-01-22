import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistersComponent } from './component/registers.component';

const routes: Routes = [

  { path: "", component: RegistersComponent },
  { path: "edit/:id", component: RegistersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistersRoutingModule { }
