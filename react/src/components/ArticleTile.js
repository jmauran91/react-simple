import React from 'react';
import { Link } from 'react-router';

const ArticleTile = (props) => {
  return(
    <div className="article-tile">
      <p><Link to={`/articles/${props.id}`}>{props.title}</Link></p>
      {props.children}
      <hr/>
    </div>
  )
}

export default ArticleTile;
