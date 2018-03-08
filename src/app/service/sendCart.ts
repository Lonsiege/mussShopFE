import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sell} from '../model/Sell';

@Injectable()
export class SaleService {
  constructor(private http: HttpClient) {
  }

  sendCart(sell: Sell) {
    const sendData = 'http://localhost:8080/sale/save';
    return this.http.post(sendData, sell);
  }
}
