import React, { Component } from 'react';
import { Link } from 'react-router';
import articles from 'core/article/data';
import PagingList from 'view/tiny/PagingList';

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
      <PagingList list={articles} Template={ArticleTemplate} />
    )
  }
}

export default ArticleList;