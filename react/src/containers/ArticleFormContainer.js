import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';

class ArticleFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleTitle: '',
      articleBody: ''
    }
    this.formTitleHandler = this.formTitleHandler.bind(this)
    this.formBodyHandler = this.formBodyHandler.bind(this)
    this.formSubmissionHandler = this.formSubmissionHandler.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  formTitleHandler(event){
    this.setState({ articleTitle: event.target.value })
  }

  formBodyHandler(event){
    this.setState({ articleBody: event.target.value})
  }

  clearForm(event){
    event.preventDefault();
    this.setState({
      articleTitle: '',
      articleBody: ''
    })
  }

  formSubmissionHandler(event){
    event.preventDefault();
    debugger;
    let subPayload = {
      title: this.state.articleTitle,
      body: this.state.articleBody
    };
    this.props.addNewArticle(subPayload);
    this.clearForm(event);

  }


  render() {
    return(
      <form className="new-article-form callout">
        <TitleField
          content={this.state.articleTitle}
          formHandler={this.formTitleHandler}
          label="Article Title"
          name="article-title"
        />
        <BodyField
          content={this.state.articleBody}
          formHandler={this.formBodyHandler}
          label="Article Body"
          name="article-body"
        />

        <div className="button-group">
          <button className="button" onClick={this.clearForm}>Clear</button>
          <input className="button" type="submit" value="Submit"
            onClick={this.formSubmissionHandler}/>
        </div>
      </form>
    )
  }
}

export default ArticleFormContainer;
