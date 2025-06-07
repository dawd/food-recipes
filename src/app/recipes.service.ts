import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  getRecipesList(): Observable<any> {
    return this.http.get('https://dummyjson.com/recipes');
  }

  getRecipeById(id: number): Observable<any> {
    return this.http.get(`https://dummyjson.com/recipes/${id}`);
  }
}
