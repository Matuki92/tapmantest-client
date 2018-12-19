import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

// import { environment } from '../../environments/environment';

@Injectable()
export class BeerService {

  private baseUrl = 'http://localhost:3000/beers';

  constructor(private httpClient: HttpClient) { }

  getActive(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/active`, options)
      .toPromise();
  }

  getAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/all`, options)
      .toPromise();
  }

  addNew(beer: Object): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/new`, beer, options)
      .toPromise();
  }

  edit(beer: Object): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseUrl}/edit`, beer, options)
      .toPromise();
  }
}