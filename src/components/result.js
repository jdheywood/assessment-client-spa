import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
  renderAnswers() {
    const { participation } = this.props;
    return participation.questionsAnswered.map((questionAnswer) => {
      return (
        <li
          key={questionAnswer.answerId}
          className="list-group-item"
        >
          <span className="question-text">
            {questionAnswer.questionText}
          </span>
          <span className="results-answer">
            You answered: {questionAnswer.answerText}
          </span>
          <div className="row">
            <div className="results-description col-md-12">
              <div className="pull-left description">{questionAnswer.resultDescription}</div>
              <div className="pull-right image">
                <img className="result-image-thumb" src={questionAnswer.resultImage} />
              </div>
            </div>
          </div>
        </li>
      );
    });
  }

  getPermaLink(id) {
    return `${window.location.origin}/participation/${id}`;
  }

  renderSummary() {
    const { participation } = this.props;
    return (
      <div className="summary">
        <h2 className="participation">Thanks for participating in this assessment</h2>
        <p className="participation text-center">You can access this page and share your results anytime using the link below</p>
        <a href={`/participation/${participation._id}`} className="permalink text-center" target="_blank"
           alt="Permanent link to these results">My results link</a>
      </div>
    );
  }

  renderOptionalCta() {
    const { assessment } = this.props;
    return (
      <div>
        <h3 className="text-center">
          {assessment.resultCallToAction.heading}
        </h3>
        <p className="text-center">
          {assessment.resultCallToAction.copy}
        </p>
        <a href={assessment.resultCallToAction.url} target="_blank" className="btn btn-primary center-block cta">
          {assessment.resultCallToAction.buttonText} <span className="glyphicon glyphicon-arrow-right" />
        </a>
      </div>
    );
  }

  render() {
    const { assessment } = this.props;
    if (!!assessment && !!assessment.resultCallToAction && !!assessment.resultCallToAction.url) {
      return (
        <div className="results">
          <h2 className="result-heading">YOUR RESULTS</h2>
          <ul className="list-group col-md-12 results">
            {this.renderAnswers()}
          </ul>
          {this.renderSummary()}
          {this.renderOptionalCta()}
        </div>
      );
    } else {
      return (
        <div className="results">
          <h2>YOUR RESULTS</h2>
          <ul className="list-group col-md-12 results">
            {this.renderAnswers()}
          </ul>
          {this.renderSummary()}
        </div>
      );
    }
  }

}

function mapStateToProps(state) {
  return {
    assessment: state.assessment.current,
    participation: state.participation.current
  };
}

export default connect(mapStateToProps, null)(Result);