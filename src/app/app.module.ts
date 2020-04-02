import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { DataManagerModule } from './data-manager/data-manager.module';
import { PortfolioTableModule } from './table/portfolioTable.module';
import { UserModule } from './user/user.module';
import { SelectedDataModule } from './selected-data/selected-data.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClientModule,
    DataManagerModule,
    PortfolioTableModule,
    UserModule,
    SelectedDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
