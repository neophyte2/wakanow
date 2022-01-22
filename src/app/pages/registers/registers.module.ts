import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistersComponent } from './component/registers.component';
import { RegistersRoutingModule } from './registers-routing.module';

@NgModule({
  declarations: [
    RegistersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistersRoutingModule
  ],
})
export class RegistersModule { }
