import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { IAppState } from './store/app.state';
import { store } from './store/store';

import { ArticleRoutesModule } from './routes.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';

import { AuthService } from './core/auth.service';
import { HttpService } from './core/http.service';
import { config } from './core/config';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule,
    ArticleRoutesModule,
    CoreModule,
    UsersModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (
    private ngRedux: NgRedux<IAppState>,
    private authService: AuthService,
    private router: Router) {
    this.ngRedux.provideStore(store);
    config(ngRedux, router, authService);
  }
}