import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: Article
  constructor(private  routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.article = JSON.parse(this.routeActive.snapshot.params.article);
  }

}
