import axios from 'axios';

export const FETCH_ASSESSMENT = 'FETCH_ASSESSMENT';
export const CREATE_PARTICIPATION = 'CREATE_PARTICIPATION';
export const SET_QUESTION = 'SET_QUESTION';
export const ANSWER_SELECTED = 'ANSWER_SELECTED';
export const CLEAR_SELECTED_ANSWER = 'CLEAR_SELECTED_ANSWER';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const FETCH_PARTICIPATION = 'FETCH_PARTICIPATION';

const ROOT_URL = window.location.origin === 'http://localhost:8080' ? 'http://localhost:3030/api' : `${window.location.origin}/api`;
const ASSESSMENTS_ENDPOINT = '/assessments';
const PARTICIPATION_ENDPOINT = '/participations';

export function fetchAssessment(id) {
  const request = axios.get(`${ROOT_URL}${ASSESSMENTS_ENDPOINT}/${id}`);
  return {
    type: FETCH_ASSESSMENT,
    payload: request
  };
}

export function createParticipation(props) {
  const request = axios.post(`${ROOT_URL}${PARTICIPATION_ENDPOINT}`, props);
  return {
    type: CREATE_PARTICIPATION,
    payload: request
  };
}

export function setQuestion(number) {
  return {
    type: SET_QUESTION,
    payload: ++number
  };
}

export function selectAnswer(answer) {
  return {
    type: ANSWER_SELECTED,
    payload: answer
  };
}

export function clearSelectedAnswer() {
  return {
    type: CLEAR_SELECTED_ANSWER,
    payload: null
  }
}

export function answerQuestion(id, data) {
  const request = axios.put(`${ROOT_URL}${PARTICIPATION_ENDPOINT}/${id}`, data);
  return {
    type: ANSWER_QUESTION,
    payload: request
  };
}

export function fetchParticipation(id) {
  const request = axios.get(`${ROOT_URL}${PARTICIPATION_ENDPOINT}/${id}`);
  return {
    type: FETCH_PARTICIPATION,
    payload: request
  };
}