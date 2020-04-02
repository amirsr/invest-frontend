import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [TableComponent],
  imports: [TableModule,
    CommonModule
  ],exports:[TableComponent]
})
export class PortfolioTableModule { }
