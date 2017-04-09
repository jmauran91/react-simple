import React from 'react'
import {browserHistory} from 'react-router'
import BodyField from './BodyField'
import TitleField from './TitleField'

class ArticleEdit extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      articleTitle: '',
      articleBody: ''
    }
    this.applyEdit = this.applyEdit.bind(this)
    this.titleEditHandler = this.titleEditHandler.bind(this)
    this.bodyEditHandler = this.bodyEditHandler.bind(this)
    this.bigEditSubmission = this.bigEditSubmission.bind(this)
  }

  titleEditHandler(event){
    this.setState({ articleTitle: event.target.value })
  }

  bodyEditHandler(event){
    this.setState({ articleBody: event.target.value })
  }

  bigEditSubmission(event){
    event.preventDefault()
    let editPayload = {
      title: this.state.articleTitle,
      body: this.state.articleBody
    }
    // debugger;
    this.applyEdit(editPayload)
    this.setState({ articleTitle: "", articleBody: "" })
  }

  applyEdit(editPayload){
    // debugger;
    // double check what this.props.params.id equals
    fetch(`/api/v1/articles/${this.props.params.id}`, {
      method: 'PATCH',
      body: JSON.stringify(editPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      // debugger;
      this.setState({ articleTitle: "", articleBody: "" })
    })
  }

  render(){

    return(
      <div>
        <p> Edit your article: </p>
        <div>
        <form className="new-article-form callout">
          <TitleField
            content={this.state.articleTitle}
            formHandler={this.titleEditHandler}
            label="Article Title"
            name="article-title"
          />
          <BodyField
            content={this.state.articleBody}
            formHandler={this.bodyEditHandler}
            label="Article Body"
            name="article-body"
          />
          <input className="button" type="submit" value="Submit"
           onClick={this.bigEditSubmission}/>
        </form>
        </div>
        <div className="button" onClick={browserHistory.goBack}> Back </div>
      </div>
    )
  }
}

export default ArticleEdit;
