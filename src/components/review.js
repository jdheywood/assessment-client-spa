import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchParticipation, fetchAssessment } from '../actions/index';
import Result from './result';

class Review extends Component {
  componentWillMount() {
    this.props.fetchParticipation(this.props.params.id)
      .then(() => {
        this.props.fetchAssessment(this.props.participation.assessmentId);
      });
  }

  componentDidMount() {
    document.body.classList.add('white');
  }

  render() {
    const { participation } = this.props;

    if (!participation) {
      return (
        <div>
          <img src="/img/loading.gif" className="loading" />
        </div>
      );
    }

    return (
      <Result />
    );
  }

}

function mapStateToProps(state) {
  return {
    participation: state.participation.current,
    assessment: state.assessment.current
  };
}

export default connect(mapStateToProps, { fetchParticipation, fetchAssessment })(Review);