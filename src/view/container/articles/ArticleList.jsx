import React, { Component } from 'react';
import { Link } from 'react-router';
import articles from 'core/article/data';

class ArticleList extends Component {
  render() {
    return (
      <ul>
        {
          articles.map(article =>
            <li key={article.id} >
              <Link to={`/articles/{article.id}`} >
                {article.title}
              </Link>
            </li>
          )
        }
      </ul>
    )
  }
}

export default ArticleList;