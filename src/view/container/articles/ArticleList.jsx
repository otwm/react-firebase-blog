import React, { Component } from 'react';
import { Link } from 'react-router';
import articles from 'core/article/data';
import List from 'view/tiny/List';

function ArticleTemplate({ id, title, modifier, creator }) {
  const writer = modifier || creator;
  return (
    <div>
      <span>{id}</span>
      <Link to={`/articles/{id}`} >
        {title}
      </Link>
      <span>{writer}</span>
    </div>
  );
}

class ArticleList extends Component {
  render() {
    return (
      <List list={articles} Template={ArticleTemplate} />
    )
  }
}

export default ArticleList;