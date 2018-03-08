import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {
  }

  getMovies() {
    const getItems = 'http://localhost:8080/items/get';
    return this.http.get(getItems);
  }
}
