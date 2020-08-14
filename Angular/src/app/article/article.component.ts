import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { Router } from '@angular/router';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles: Array<Article> = new Array<Article>();
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.articles.push(
      {
        name: 'TV 24',
        description: 'Is very big and have 4 years warranty',
        price: 1500,
        stock: 10,
        pricePromotion: 1200
      },
      {
        name: 'Laptop',
        description: 'The most device',
        price: 15000,
        stock: 20,
        pricePromotion: 14000
      },
      {
        name: 'Monitor',
        description: 'Full HD',
        price: 8000,
        stock: 30,
        pricePromotion: 6000
      }
      )
  }

  nextParameter(articuleReceived: Article){
    console.log(articuleReceived)
    this.route.navigate(['articleDetail', {article: JSON.stringify(articuleReceived)}])
  }

}
