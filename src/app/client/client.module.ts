import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectorService } from './connector.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [HttpClientModule,
    CommonModule
  ],providers:[ConnectorService]
})
export class ClientModule { }
