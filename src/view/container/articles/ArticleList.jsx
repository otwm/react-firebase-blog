import React, { Component } from 'react';
import { Link } from 'react-router';

class ArticleList extends Component {
  render(){
    return (
      <ul>
        <li><Link to="/articles/1">React Forever!</Link></li>
        <li><Link to="/articles/2">Awesome Firebase!</Link></li>
        <li><Link to="/articles/3">Good Redux!</Link></li>
      </ul>
    )
  }
}

export default ArticleList;