import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  model: any = {};
  



  ngOnInit(): void {
    
  }

  constructor(protected accountService: AccountService, private router: Router, private toastr: ToastrService){

  }

  login(){
    this.accountService.login(this.model).subscribe(
      {
        next: () => {
          this.router.navigateByUrl('/members');
        },
        error: error => {
          this.toastr.error(error.error),
          console.log(error)
        }
      }
    )
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/home');
  }

}
