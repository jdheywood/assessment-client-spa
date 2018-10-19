import React, { Component } from 'react';
import { connect } from 'react-redux';

class Answer extends Component {
  render() {
    const { assessment, questionNumber } = this.props;
    const question = assessment.questions[questionNumber];

    return (
      <li>
        <span>
          {question.displayText}
        </span>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    assessment: state.assessment.current,
    questionNumber: state.question.number
  };
}

export default connect(mapStateToProps, null)(Answer);