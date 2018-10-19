import { FETCH_ASSESSMENT } from '../actions/index';

const INITIAL_STATE = { current: null };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_ASSESSMENT:
      return { ...state, current: action.payload.data };
    default:
      return state;
  }
}