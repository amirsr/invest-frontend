import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager/data-manager.service';
import { Instrument } from './entities/instrument';
import { UserDataService } from './user/user-data.service';
import { SelectedDataManagerService } from './selected-data/selected-data-manager.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  instrumentsToShow:Instrument[];
  constructor(private dataManager: DataManagerService,
    private userService : UserDataService,
    private selectedDataManagerService:SelectedDataManagerService){
  }
  ngOnInit(): void {
    this.dataManager.getData().subscribe((res : Instrument[])=>{
      this.instrumentsToShow = res;
    });
  }
  showAllData(){
    this.selectedDataManagerService.selectedInstruments = [];
    this.instrumentsToShow = this.dataManager.instrumentList;
  }
  showPortfolio(){
    this.selectedDataManagerService.selectedInstruments = [];
    this.instrumentsToShow = 
    this.userService.user.instrumentList.map(instrumentId=>this.dataManager.instrumentMap.get(instrumentId));
  }
  addedInstrument(){
    this.userService.addInstruments(this.selectedDataManagerService.selectedInstruments);
    this.selectedDataManagerService.selectedInstruments = [];
  }
  removedInstrument(){
    this.userService.removeInstruments(this.selectedDataManagerService.selectedInstruments);
    this.instrumentsToShow = 
    this.userService.user.instrumentList.map(instrumentId=>this.dataManager.instrumentMap.get(instrumentId));
    this.selectedDataManagerService.selectedInstruments = [];
  }
}
