import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedDataComponent } from './selected-data/selected-data.component';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectedDataComponent],
  imports: [CardModule,ButtonModule,InputTextModule,FormsModule,
    CommonModule
  ],exports:[SelectedDataComponent]
})
export class SelectedDataModule { }
