import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private userSubject = new BehaviorSubject<any>(this.getUserFromStorage());
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuthStatus();
  }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user).pipe(
      tap(response => {
        console.log('Signup successful:', response);}),
      catchError(error => {
        console.error('Signup error:', error);
        return throwError(() => error);
      })
    );
  }

  signin(credentials: any): Observable<any> {

    return this.http.post(`${this.apiUrl}/signin`, credentials, { withCredentials: true }).pipe(
      tap((response: any) => {
        console.log('Sign-in successful:', response);
        this.handleAuthSuccess(response);
      }),
      catchError(error => {
        console.error('Sign-in error:', error);
        return throwError(() => error);
      })
    );
  }

  signout(): Observable<any> {
    if (!localStorage.getItem('access_token')) {
      this.clearAuth();
      return of({ success: true });
    }

    return this.http.post(`${this.apiUrl}/signout`, {}, { withCredentials: true }).pipe(
      tap(() => {
        this.clearAuth();
      }),
      catchError(error => {
        console.error('Sign-out error:', error);
        this.clearAuth();
        return of({ success: true });
      })
    );
  }

  isAuthenticated(): boolean {
    const isAuth = this.hasValidToken();
    return isAuth;
  }

  getUser(): any {
    return this.userSubject.value;
  }

  private hasValidToken(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) return false;

    return true;
  }

  private getUserFromStorage(): any {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  private handleAuthSuccess(response: any): void {

    localStorage.setItem('access_token', response.token);

    if (response.user) {
      localStorage.setItem('user', JSON.stringify(response.user));
    }

    this.isAuthenticatedSubject.next(true);
    this.userSubject.next(response.user);
  }

  private clearAuth(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.isAuthenticatedSubject.next(false);
    this.userSubject.next(null);
  }

  private checkAuthStatus(): void {
    const isAuthenticated = this.hasValidToken();
    this.isAuthenticatedSubject.next(isAuthenticated);

    if (isAuthenticated) {
      const user = this.getUserFromStorage();
      this.userSubject.next(user);
    }
  }
}
