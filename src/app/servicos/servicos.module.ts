import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos/servicos.component';



@NgModule({
  declarations: [
    ServicosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicosComponent
  ]
})
export class ServicosModule { }
