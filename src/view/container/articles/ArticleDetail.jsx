import React, { Component } from 'react';
import { Link } from 'react-router';
import articles from 'core/article/data';

class ArticleDetail extends Component {
  render() {
    const { id } = this.props.params;
    const article = articles.find(article => article.id === Number(id));
    const
      {
        title,
        content,
        createDate,
        creator,
        modifiedDate,
        modifier,
      } = article;
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
        <Link to="/" >목록으로</Link>
      </section>
    )
  }
}

export default ArticleDetail;