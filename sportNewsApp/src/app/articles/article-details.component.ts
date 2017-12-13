import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

import { ArticlesActions } from '../store/articles/articles.actions';

import { ArticleReviewModel } from './article-review.model';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  private articleId: number;
  article: object = {};
  reviews: Array<object> = [];
  review: ArticleReviewModel = new ArticleReviewModel(1);
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private articlesActions: ArticlesActions,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const id = params['id'];

        this.articlesActions.details(id);
        this.articlesActions.allReviews(id);
        this.ngRedux
          .select(state => state.articles)
          .subscribe(articles => {
            this.article = articles.articleDetails;
            this.reviews = articles.articleReviews;
          });
      });
  }

  isAdmin() {
    let isAdmin = false;
    if (this.authService.getUser() === 'Admin') {
      isAdmin = true;
    }
    return isAdmin;
  }

  like() {
    this.articlesActions.like(this.article['id']);
  }
  submitReview() {
    this.articlesActions.submitReview(this.article['id'], this.review);
  }

  delete(id) {
    this.articlesActions.delete(id);
    this.ngRedux
    .select(state => state.articles.allArticles)
    .subscribe(allArticles => {
      if(allArticles){
        this.router.navigateByUrl('/');
      }
    })
  }
}
