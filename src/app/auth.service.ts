import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor() { }

  isAuthorized(): boolean {
    return !! this.user;
  }
  login() {
    this.user = {
      name: 'lycifer',
      token: 'token'
    };
  }
  logout() {
    this.user = null;
  }
  
}