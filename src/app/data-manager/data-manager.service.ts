import { Injectable } from '@angular/core';
import { ConnectorService } from '../client/connector.service';
import { Instrument } from '../entities/instrument';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  instrumentMap: Map<number,Instrument>;
  instrumentList:Instrument[];
  constructor(private connector: ConnectorService) {
    this.instrumentMap = new Map();
    this.instrumentList = [];
   }
  

  getData(){
      let result = this.connector.getAllInstruments();
      result.subscribe((res : Instrument[])=>{
        this.instrumentList = res;
        console.log(this.instrumentList)
        res.forEach(instrument => this.instrumentMap.set(instrument.instrumentId,instrument))
      });
      return result;
  }
}
