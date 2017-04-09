import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ArticlesIndexContainer from './containers/ArticlesIndexContainer';
import ArticleTile from './components/ArticleTile';
import ArticleShowContainer from './containers/ArticleShowContainer';
import ArticleEdit from './components/ArticleEdit'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" >
        <IndexRoute component={ArticlesIndexContainer} />
        <Route path="articles/:id" component={ArticleShowContainer} />
        <Route path="articles/:id/edit" component={ArticleEdit} />
      </Route>
    </Router>
  );
}

export default App;
