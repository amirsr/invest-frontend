import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SelectedDataManagerService } from '../selected-data-manager.service';
import { UserDataService } from 'src/app/user/user-data.service';

@Component({
  selector: 'app-selected-data',
  templateUrl: './selected-data.component.html',
  styleUrls: ['./selected-data.component.css']
})
export class SelectedDataComponent implements OnInit {

  @Output() 
  removedInstrumentsEvent = new EventEmitter();
  @Output() 
  addInstrumentsEvent = new EventEmitter();
  constructor(private selectedDataManager: SelectedDataManagerService,
    private userDataService: UserDataService) { 

  }

  ngOnInit() {
  }
  removeInstruments(){
    this.removedInstrumentsEvent.next();
  }

  addInstruments(){
    this.addInstrumentsEvent.next();
  }
}
