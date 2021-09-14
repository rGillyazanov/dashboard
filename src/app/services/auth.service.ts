import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(payload: { username: string, password: string } | null) {
    return EMPTY;
  }

  logout(token: string | null) {
    return EMPTY;
  }
}
