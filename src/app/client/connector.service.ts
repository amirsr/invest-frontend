import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Instrument} from "../entities/instrument";
import { User } from '../entities/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
  // configUrl = 'http://localhost:8080';
  private API_URL= environment.API_URL;
  constructor(private http: HttpClient) { }

  getAllInstruments(){
    console.log(this.API_URL)
    return this.http.get<Instrument[]>(this.API_URL+'/allInstruments');
  }
  getUserData(userName:string){
    return this.http.get<User>(this.API_URL+'/login',{
      params: {
        userName: userName
      }
    });
  }
  registerNewUser(userName:string){
    const body = { newUserName: userName }
    return this.http.get<User>(this.API_URL+'/signUp',{
      params: {
        userName: userName
      }
    });
  }
  addInstrument(userName:string, addedInst:string[]){
    return this.http.get(this.API_URL+'/addInstrument',{
      params: {
        userName: userName,
        addedIds: addedInst
      }
    });
  }
  
  removeInstrument(userName:string, removedInst:string[]){
    return this.http.get(this.API_URL+'/removeInstrument',{
      params: {
        userName: userName,
        removedIds: removedInst
      }
    });
  }
}
