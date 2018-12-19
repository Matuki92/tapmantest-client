import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

// import { environment } from '../../environments/environment';

@Injectable()
export class BeerService {

  private API_URL = 'http://localhost:3000/beers';

  constructor(private httpClient: HttpClient) { }

  getActive(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/active`, options)
      .toPromise();
  }

  getAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/all`, options)
      .toPromise();
  }

  addNew(beer: Object): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/new`, beer, options)
      .toPromise();
  }

  edit(beer: Object): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.API_URL}/edit`, beer, options)
      .toPromise();
  }
}