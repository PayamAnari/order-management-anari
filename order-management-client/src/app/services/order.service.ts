import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Order } from '../models/order.model';
import { environment } from '../../environment/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = `${environment.apiUrl}/orders`;
  private messageSubject = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {
  }

  get message$(): Observable<string> {
    return this.messageSubject.asObservable();
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl, { withCredentials: true }).pipe(
      catchError(error => {
        console.error('Error fetching orders:', error, 'Status:', error.status, 'Message:', error.error);
        if (error.status === 401) {
          this.router.navigate(['/signin']);
        }
        return throwError(() => error);
      })
    );
  }


  createOrder(order: Order): Observable<Order> {
    const token = localStorage.getItem('access_token');
    console.log('Creating order with token:', token);
    if (!token) {
      this.router.navigate(['/signin']);
      return throwError(() => new Error('No token available'));
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Order>(this.apiUrl, order, { headers, withCredentials: true }).pipe(
      tap(createdOrder => {
        console.log('Order created:', createdOrder);
        this.messageSubject.next('Order created successfully!');
      }),
      catchError(error => {
        console.error('Error creating order:', error);
        if (error.status === 401) {
          console.error('Authentication error:', error.error);
          this.router.navigate(['/signin']);
        }
        return throwError(() => error);
      })
    );
  }

  getOrder(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`, { withCredentials: true }).pipe(
      catchError(error => {
        console.error(`Error fetching order ${id}:`, error);
        if (error.status === 401) {
          this.router.navigate(['/signin']);
        }
        return throwError(() => error);
      })
    );
  }
}
