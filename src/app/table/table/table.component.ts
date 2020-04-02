import { Component, OnInit, Input } from '@angular/core';
import { Instrument } from 'src/app/entities/instrument';
import { SelectedDataManagerService } from 'src/app/selected-data/selected-data-manager.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  //selectedInstruments: Instrument[];
  cols: any[];
  
  @Input()
  instruments: Instrument[];
  constructor(private selectedDataManager:SelectedDataManagerService) { 
    
    this.cols = [
      { field: 'instrumentId', header: 'Instrument Id' },
      { field: 'name', header: 'Instrument name' },
      { field: 'symbol', header: 'Symbol' },
      { field: 'instrumentType', header: 'Instrument Type' }];
  }

  ngOnInit() {
  }

}
