import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  public getDrinks<T>(): Observable<T> {
    return this.http.get<T>(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    );
  }
  // Template
  public getDrinksByName<T>(name: string = 'margarita'): Observable<T> {
    return this.http.get<T>(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name
    );
  }

  public getDrinksByID<T>(id: string): Observable<T> {
    return this.http.get<T>(
      'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id
    );
  }

  public postData(): Observable<any> {
    return this.http.post('url', JSON.stringify({ name: 'Gena' }), {
      headers: {
        'Content-Type': 'aplication/json',
        token: '3784y238ouoihsco9sac32d',
      },
      responseType: 'json',
    });
  }

  constructor(private http: HttpClient) {}
}
