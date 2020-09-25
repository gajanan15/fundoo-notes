import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  postService(data, url: string, tokenRequired: boolean, httpOption = null) {
    return this.http.post(url, data, tokenRequired && httpOption);
  }
}
