import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Dationg App';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
   this.setCurrentUser();
  }

  setCurrentUser(){
    const userStirng = localStorage.getItem('user');
    if(!userStirng) return;
    const user: User = JSON.parse(userStirng);
    this.accountService.setCurrentUser(user);
  }


}