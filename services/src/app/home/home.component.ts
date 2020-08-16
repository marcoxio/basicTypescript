import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { UserService } from '../services/user.service';
import { ArticlesService } from '../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: Array<Article> = new Array<Article>();
  
  constructor(
    private userInjected: UserService,
    private articleInjected: ArticlesService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.articleInjected.readNews().subscribe(( articlesApi ) =>{
      this.articles = articlesApi;
    });
    
    let articleSend: Article = new Article();
    articleSend.body = 'This is a body of article';
    articleSend.title = 'Best Article';
    articleSend.userId = 4;

    this.articleInjected.saveArticle(articleSend).subscribe(( articleNew ) => {
      this.articles.push(articleNew);
    })
    
  }

  goDetail(article: Article){
    this.articleInjected.article = article;
    this.route.navigateByUrl('/article-detail');
  }

  delete( id: number )
  {
    this.articleInjected.deleteArticle(id).subscribe(( data )=> {
      console.log(data)
    })
  }

  update( article: Article )
  {
    this.articleInjected.article = article;
    this.route.navigateByUrl('/add-article/false');
    // this.articleInjected.updateArticle(article).subscribe(( articleReceived ) =>{
    //   console.log(articleReceived)
    // })
  }

}
