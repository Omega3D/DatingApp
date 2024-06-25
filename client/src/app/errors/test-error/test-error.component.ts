import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.css'
})
export class TestErrorComponent implements OnInit {
  baseUrl = 'https://localhost:4002/api/';
  validationErrors: string[] = []
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    
  }

  get404Error(){
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  getServerError(){
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  getBadRequestError(){
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  getAuthError(){
    this.http.get(this.baseUrl + 'account/register').subscribe({
      next: response => console.log(response),
      error: error => {
        console.log(error)
        this.validationErrors = error;
      }
    })
  }

}
