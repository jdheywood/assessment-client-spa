import { SET_QUESTION } from '../actions/index';

const INITIAL_STATE = { number: -1 };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_QUESTION:
      return { ...state, number: action.payload };
    default:
      return state;
  }
}