import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { ArticlesService } from '../services/articles.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../models/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  users: Array<Users> = new Array<Users>();
  formArticle: FormGroup;
  article: Article = new Article();
  isNew: boolean = true;
  titleFrom: string = '';
  constructor(private articleInjected: ArticlesService, private fbGenerator: FormBuilder,
              private RouteActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.isNew = JSON.parse(this.RouteActive.snapshot.params.isNew);
    this.titleFrom = this.isNew ? 'Add' : 'Edit';
    
    this.formArticle = this.fbGenerator.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required],

    });

    if (!this.isNew) {
      this.article = this.articleInjected.article;
      this.formArticle.setValue({
        title: this.article.title,
        body: this.article.body,
        userId: this.article.userId
      });
    }


    this.articleInjected.readAllUsers().subscribe(( userReceived ) => {
      this.users = userReceived;
    })
  }

  Add()
  {
    this.article = this.formArticle.value as Article;
    this.articleInjected.saveArticle(this.article).subscribe(( articleReceived ) => {
      console.log(articleReceived)
      console.log('Your first regiter inserted')
      this.formArticle.reset()
    });
  }

  Edit(){
    this.article.body = this.formArticle.value.body;
    this.article.title = this.formArticle.value.title;
    this.article.userId = this.formArticle.value.userId;
    // this.article = this.articleInjected.article.id;
    this.articleInjected.updateArticle(this.article).subscribe(( articleReceived ) => {
      console.log(articleReceived)
    });
  }

}
