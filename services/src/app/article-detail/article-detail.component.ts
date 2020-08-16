import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/article';
import { Users } from '../models/users';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: Article = new Article();
  user: Users = new Users();
  constructor(private articleInjected: ArticlesService) 
  {
    this.article = this.articleInjected.article;
  }

  ngOnInit(): void {
    this.articleInjected.readUser(this.article.userId).subscribe(( userApi ) => {
      this.user = userApi;
    });
  }

}
