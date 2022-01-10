import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../components/mensagem/mensagem.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MensagemModule, ReactiveFormsModule],
  exports: [MensagemModule, ReactiveFormsModule],
})
export class SharedModule {}
