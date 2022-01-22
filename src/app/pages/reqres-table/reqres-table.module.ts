import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReqresTableComponent } from './component/reqres-table.component';
import { ReqresTableRoutingModule } from './reqres-table-routing.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    ReqresTableComponent
  ],
  imports: [
    PaginationModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReqresTableRoutingModule
  ],
})
export class ReqresTableModule { }
