import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataComponent } from './user-data/user-data.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [UserDataComponent],
  imports: [CardModule,ButtonModule,InputTextModule,FormsModule,
    CommonModule
  ],exports:[UserDataComponent]
})
export class UserModule { }
