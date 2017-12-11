import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { RegisterComponent} from './users/register.component';
import { LoginComponent} from './users/login.component';
import { StatsComponent } from './stats/stats.component';
import { AddArticleComponent } from './articles/add-article.component';
import { ListArticlesComponent } from './articles/list-articles.component';
import { ProfileComponent } from './users/profile.component';

import { PrivateRoute } from './core/private.route';

const routes: Routes = [
  // { path: '',component : StatsComponent},
  { path: '',component : ListArticlesComponent},
  { path: 'users/register', component: RegisterComponent},
  { path: 'users/login', component: LoginComponent},
  {
    path:'articles/add',
    component:AddArticleComponent,
    canActivate:[PrivateRoute]
  },
  { path:'articles/all',component: ListArticlesComponent},
  { path: 'stats', component: StatsComponent},
  { path: 'users/profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ArticleRoutesModule { }