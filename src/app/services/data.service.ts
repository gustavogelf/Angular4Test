import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string;

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:5000/api/posts';
  }

  getPosts(): Observable<{}> {
    return this.http.get(`${this.url}?sort=-created_at`);
  }

  deletePost(id: string): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }
}
