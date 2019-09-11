import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportacoesRoutingModule } from './importacoes-routing.module';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    ImportacoesRoutingModule
  ], 
  exports: []
})
export class ImportacoesModule { }
