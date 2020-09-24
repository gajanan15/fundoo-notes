import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpService } from './../http_service/http.service';

@Injectable({
  providedIn: 'root',
})
export class FundooService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpService) {}

  conversionValue(data) {
    return this.http.postService(data, this.baseUrl + `user/login`);
  }
}
