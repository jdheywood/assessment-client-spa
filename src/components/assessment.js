import React, { Component, PropTypes } from 'react';
import { fetchAssessment, createParticipation, setQuestion } from '../actions/index';
import Question from './question';
import Result from './result';
import { reduxForm } from 'redux-form';
import validator from 'validator';

class Assessment extends Component {
  componentWillMount() {
    this.props.fetchAssessment(this.props.params.id);
  }

  onSubmit(formProps) {
    formProps['assessmentId'] = this.props.assessment._id;
    formProps['assessmentName'] = this.props.assessment.name;
    this.props.createParticipation(formProps)
      .then(() => {
        this.props.setQuestion(-1);
      });
  }

  render() {
    const { assessment, questionNumber } = this.props;
    const { fields: { email }, handleSubmit } = this.props;

    if (!assessment) {
      return (
        <div>
          <img src="/img/loading.gif" className="loading" />
        </div>
      );
    }

    if (questionNumber < 0) {
      return (
        <div>
          <img className="assessment-intro img-responsive center-block" src={assessment.imageUrl} />
          <h1 className="assessment-intro text-center">{assessment.name}</h1>
          <p className="lead text-center assessment-intro">{assessment.description}</p>


          <form className="center-block assessment-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className={`form-group`}>

              <div className="input-group">
                <input type="text" id="participant-email" className="form-control" placeholder="Please enter your email" {...email} />
                <span className="input-group-btn">
                  <button className="btn btn-default assessment-start" type="submit">{assessment.callToAction}</button>
                </span>
              </div>
              <div className="text-help text-center">
                {email.touched ? email.error : ''}
              </div>
            </div>
          </form>
        </div>
      );
    }
    else if (questionNumber < assessment.questions.length) {
      return (
        <Question />
      );
    }
    else {
      return (
        <Result />
      );
    }
  }
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Please enter your email to continue';
  } else if (!validator.isEmail(values.email.toString())) {
    errors.email = 'Please enter a valid email address to continue';
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    assessment: state.assessment.current,
    questionNumber: state.question.number
  };
}

export default reduxForm({
  form: 'ParticipationForm',
  fields: ['email'],
  validate
}, mapStateToProps, { fetchAssessment, createParticipation, setQuestion })(Assessment);