import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  token;

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  hasToken() {
    return !!this.getToken();
  }

  removeToken() {
    this.token = null;
    localStorage.removeItem('token');
  }
}

