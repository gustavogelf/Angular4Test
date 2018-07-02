import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string;

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:5000/api/posts';
  }

  getPosts(): Observable<{}> {
    return this.http.get(this.url);
  }

  deletePost(id: string): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError('deletePost'))
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
