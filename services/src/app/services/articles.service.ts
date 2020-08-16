import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
   article: Article = new Article();
   route: string = 'https://jsonplaceholder.typicode.com'
  constructor(private http: HttpClient) { }

  readNews(): Observable<Article[]>
  {
    return this.http.get<Article[]>(`${this.route}/posts/`);
    
  }

  readUser( userId: number ): Observable<Users>
  {
    return this.http.get<Users>( `${this.route}/users/${userId}`);
    
  }

  readAllUsers() : Observable<Users[]>
  {
      return this.http.get<Users[]>(`${this.route}/users/`);
  }

  saveArticle( article: Article ): Observable<Article>
  {
    return this.http.post<Article>(`${this.route}/posts`, article);
    
  }

  deleteArticle( id: number ): Observable<any>
  {
    return this.http.delete<any>(`${this.route}/posts/${id}`);
  }

  updateArticle(article: Article): Observable<Article>{
    return this.http.put<Article>(`${this.route}/posts/${article.id}`, article);
  }
}
