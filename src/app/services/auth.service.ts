import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BACKEND_URL = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.BACKEND_URL}/register`, user, httpOptions)
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      );
  }

  loginUser(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    };

    return this.http.post<any>(`${this.BACKEND_URL}/login`, body).pipe(
      map((response) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
        return response;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
}
