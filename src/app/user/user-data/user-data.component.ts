import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  loginFormOpened:boolean = false;
  signUpFormOpened:boolean = false;
  userName:string;
  @Output() 
  changeToMyPortfolioEvent = new EventEmitter();
  @Output() 
  changeToAllDataEvent = new EventEmitter();
  constructor(private userDataService:UserDataService) { }

  ngOnInit() {
  }
  openLogin(){
    this.loginFormOpened = true;
  }
  openSignUp(){
    this.signUpFormOpened = true;
  }
  cancel(){
    this.loginFormOpened = false;
    this.signUpFormOpened = false;
  }
  logIn(){
    this.userDataService.loginUser(this.userName);
  }
  signUp(){
    this.userDataService.signUpUser(this.userName);
  }
  changeToAllData(){
    this.userDataService.changeData();
    this.changeToAllDataEvent.next();
  }
  changeToMyPortfolio(){
    this.userDataService.changeData();
    this.changeToMyPortfolioEvent.next();
  }
  logout(){
    this.userDataService.logoutUser();
    this.changeToAllDataEvent.next();
  }
}
