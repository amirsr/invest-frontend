import { Injectable, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { ConnectorService } from '../client/connector.service';
import { Instrument } from '../entities/instrument';

@Injectable({
  providedIn: 'root'
})
export class UserDataService implements OnInit{
  isUserLogged:boolean = false;
  allData:boolean = true;
  user:User;
  constructor(private clientService:ConnectorService) { }
  
  ngOnInit(): void { 
  }
  loginUser(userName:string):void{
    this.clientService.getUserData(userName).subscribe((res : User) =>{
      this.user = res;
      this.isUserLogged = true;
    },err => {
      alert(`This ${userName} doesnot exist in the system. `);
    });
  }
  signUpUser(userName:string):void{
    this.clientService.registerNewUser(userName).subscribe((res : User) =>{
      this.user = res;
      this.isUserLogged = true;
    },err => {
      alert(`${userName} is already in use. try another one.`);
    });
  }
  logoutUser():void{
    this.isUserLogged = false;
    this.user = null;
    this.allData = true;
  }
changeData(){
  this.allData = !this.allData;
}

addInstruments(instrumentToAdd:Instrument[]){
  let addedInst = [];
  if(this.user!=null&&this.user.instrumentList!=null){
    instrumentToAdd.forEach(instrument=>{
      if(this.user.instrumentList.indexOf(instrument.instrumentId)==-1){
        addedInst.push(instrument.instrumentId.toString());
        this.user.instrumentList.push(instrument.instrumentId);
      }
    });
  }
  if(addedInst.length>0){
    this.clientService.addInstrument(this.user.userName,addedInst).subscribe();
  }
}
removeInstruments(instrumentToRemove:Instrument[]){
  let removedInst = [];
  if(this.user!=null&&this.user.instrumentList!=null){
    instrumentToRemove.forEach(instrument=>{
      let currIndex = this.user.instrumentList.indexOf(instrument.instrumentId);
      if(currIndex != -1){
        this.user.instrumentList.splice(currIndex,1);
        removedInst.push(instrument.instrumentId.toString());
      }
    });
  }
  if(removedInst.length>0){
    this.clientService.removeInstrument(this.user.userName,removedInst).subscribe();
  }
}
  
}
