import { IUsersState } from './users/users.state';
import { IStatsState } from './stats/stats.state';
import { IArticlesState } from './articles/articles.state'

export interface IAppState {
  stats: IStatsState,
  users: IUsersState,
  articles: IArticlesState
}
