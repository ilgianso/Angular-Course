import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  USER_ENDPOINT = "http://localhost:3000/users";

  constructor(readonly http: HttpClient) { }
  returnUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_ENDPOINT);
  }

}
