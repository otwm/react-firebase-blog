import React, { Component } from 'react';
import { Link } from 'react-router';
import articles from 'core/article/data';

class ArticleDetail extends Component {
  render() {
    const
       {
        title,
        content,
        createDate,
        creator,
        modifiedDate,
        modifier,
    } = articles[0];
    return (
      <section>
        <article>
          <h4>{title}</h4>
          <p>
            {content}
          </p>
          <div>{createDate}</div>
          <div>{creator}</div>
          <div>{modifiedDate}</div>
          <div>{modifier}</div>
        </article>
        <Link to="/">목록으로</Link>
      </section>
    )
  }
}

export default ArticleDetail;