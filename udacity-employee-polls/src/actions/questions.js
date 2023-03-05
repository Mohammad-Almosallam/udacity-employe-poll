import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { submitUserAnswer } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SUBMIT_QUESTION_ANSWER = "SUBMIT_QUESTION_ANSWER";
export const SUBMIT_NEW_QUESTION = "SUBMIT_NEW_QUESTION";
// export const ADD_TWEET = "ADD_TWEET";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

//SUBMITTING NEW QUESTIONS
export function submitNewQuestion(question) {
  return {
    type: SUBMIT_NEW_QUESTION,
    question,
  };
}

export function handleSubmitNewQuestion(info) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion(info)
      .then((question) => dispatch(submitNewQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

//QUESTIONS ANSWERS SUBMISSION

export function submitQuestionAnswer({ qid, authedUser, answer }) {
  return {
    type: SUBMIT_QUESTION_ANSWER,
    qid,
    authedUser,
    answer,
  };
}

export function handleSubmitQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestionAnswer(info)
      .then(() => dispatch(submitQuestionAnswer(info)))
      .then(() => dispatch(submitUserAnswer(info)))
      .then(() => dispatch(hideLoading()));
  };
}
