import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../../App';
import ArticleList from '../../view/container/articles/ArticleList';

const getRoutes = store => (
  <Route path="/" component={App} >
    <IndexRoute component={ArticleList} />
  </Route>
);

export default getRoutes;