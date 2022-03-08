import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "https://api.github.com/search/users?q=";
  urlId = "https://api.github.com/users/"

  constructor(private http: HttpClient) { }

  getUsers(dato: any): Observable<any> {
    return this.http.get(this.url + dato);
  }

  getUsersId(userLogin : any): Observable<any> {
    return this.http.get(this.urlId + userLogin);
  }
}
