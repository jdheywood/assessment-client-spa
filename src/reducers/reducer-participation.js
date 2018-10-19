import { CREATE_PARTICIPATION, ANSWER_QUESTION, FETCH_PARTICIPATION } from '../actions/index';

const INITIAL_STATE = { current: null };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_PARTICIPATION:
      return { ...state, current: action.payload.data };
    case ANSWER_QUESTION:
      return { ...state, current: action.payload.data };
    case FETCH_PARTICIPATION:
      return { ...state, current: action.payload.data };
    default:
      return state;
  }
}