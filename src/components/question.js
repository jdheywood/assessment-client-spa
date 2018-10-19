import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setQuestion, answerQuestion, selectAnswer, clearSelectedAnswer } from '../actions/index';

class Question extends Component {
  componentDidMount() {
    document.body.classList.add('white');
  }

  submitAnswer() {
    if (!!this.props.selectedAnswer) {
      const { answerQuestion, setQuestion, clearSelectedAnswer, participation, selectedAnswer, questionNumber, } = this.props;
      answerQuestion(participation._id, selectedAnswer);
      setQuestion(questionNumber);
      clearSelectedAnswer();
    }
  }

  selectAnswer(selected) {
    this.props.selectAnswer(selected);
  }

  getButtonClass() {
    return !!this.props.selectedAnswer ? 'btn btn-primary question': 'btn btn-primary question disabled';
  }

  getAnswerClass(answer, selectedAnswer) {
    return !!selectedAnswer && (answer._id === selectedAnswer.answerId) ? 'list-group-item active' : 'list-group-item';
  }

  participationComplete(questionNumber, assessment) {
    return ((questionNumber+1) === assessment.questions.length);
  }

  renderAnswers() {
    const {assessment, questionNumber, selectedAnswer} = this.props;
    const question = assessment.questions[questionNumber];

    return question.answers.map((answer) => {
      const selected = {
        questionId: question._id,
        questionText: question.displayText,
        answerId: answer._id,
        answerText: answer.displayText,
        resultDescription: answer.resultDescription,
        resultImage: answer.resultImage,
        completed: this.participationComplete(questionNumber, assessment)
      };
      return (
        <li
          key={answer._id}
          onClick={() => this.selectAnswer(selected)}
          className={this.getAnswerClass(answer, selectedAnswer)}
        >
          {answer.displayText}
        </li>
      );
    });
  }

  render() {
    const {assessment, questionNumber} = this.props;
    const question = assessment.questions[questionNumber];
    const questionNumberString = `QUESTION ${this.props.questionNumber + 1} OF ${assessment.questions.length}`;
    return (
      <div>
        <h1 className="assessment-name text-center">
          {assessment.name}
        </h1>
        <h2 className="question-number text-center">
          {questionNumberString}
        </h2>
        <h3 className="question-text text-center">
          {question.displayText}
        </h3>
        <p className="question-description text-center">
          {question.description}
        </p>
        <ul className="list-group col-md-12 questions">
          {this.renderAnswers()}
        </ul>
        <button className={this.getButtonClass()} onClick={() => this.submitAnswer()}>
          Next <span className="glyphicon glyphicon-arrow-right" />
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    assessment: state.assessment.current,
    participation: state.participation.current,
    questionNumber: state.question.number,
    selectedAnswer: state.answer.selected
  };
}

export default connect(mapStateToProps, { setQuestion, answerQuestion, selectAnswer, clearSelectedAnswer })(Question);