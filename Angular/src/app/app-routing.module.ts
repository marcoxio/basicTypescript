import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { DirectiveComponent } from './directive/directive.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  { path: '', component: TitleComponent },
  { path: 'directives', component: DirectiveComponent },
  { path: 'directives', component: DirectiveComponent },
  { path: 'bootstrap', component: BootstrapComponent },
  
  { path: 'users', component: UsersComponent, children: [
      { path: 'add', component: AddUsersComponent },
      { path: 'edit', component: EditUsersComponent }
    ]
  },
  { path: 'article', component: ArticleComponent },
  { path: 'articleDetail', component: ArticleDetailComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
