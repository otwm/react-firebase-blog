import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../../App';
import ArticleList from 'view/container/articles/ArticleList';
import ArticleDetail from 'view/container/articles/ArticleDetail';
import NotFound from 'view/container/NotFound';

const getRoutes = store => (
  <Route path="/" component={App} >
    <IndexRoute component={ArticleList} />
    <Route path="articles" component={ArticleDetail} >
      <Route path=":id" component={ArticleDetail}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Route>
);

export default getRoutes;