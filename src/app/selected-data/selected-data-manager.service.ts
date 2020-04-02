import { Injectable } from '@angular/core';
import { Instrument } from '../entities/instrument';

@Injectable({
  providedIn: 'root'
})
export class SelectedDataManagerService {
  selectedInstruments: Instrument[] =[];
  
  constructor() { }
}
