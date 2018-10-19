import { ANSWER_SELECTED, CLEAR_SELECTED_ANSWER } from '../actions/index';

const INITIAL_STATE = { selected: null };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case ANSWER_SELECTED:
      return { ...state, selected: action.payload };
    case CLEAR_SELECTED_ANSWER:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}