import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BestSellService {
  constructor(private http: HttpClient) {
  }

  getBestSell() {
    const getItems = 'http://localhost:8080/stat/get';
    return this.http.get(getItems);
  }
}
