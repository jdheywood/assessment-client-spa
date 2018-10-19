import { combineReducers } from 'redux';
import AssessmentReducer from './reducer-assessment';
import ParticipationReducer from './reducer-participation';
import QuestionReducer from './reducer-question';
import AnswerReducer from './reducer-answer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  assessment: AssessmentReducer,
  participation: ParticipationReducer,
  question: QuestionReducer,
  answer: AnswerReducer,
  form: formReducer
});

export default rootReducer;
