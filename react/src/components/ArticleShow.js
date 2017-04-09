import React from 'react';
import { browserHistory, Link } from 'react-router';
import ArticleEdit from './ArticleEdit'

const ArticleShow = (props) => {
  return(
    <div className="article-show">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <div className='row'>
        <div className="button" onClick={browserHistory.goBack}> Back </div>
        <div><Link to={`/articles/${props.id}/edit`}> Edit </Link></div>
        
      </div>
      {props.children}
    </div>
  )
}

export default ArticleShow;
