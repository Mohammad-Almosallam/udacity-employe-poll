import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { submitUserAnswer } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SUBMIT_QUESTION = "SUBMIT_QUESTION";
// export const ADD_TWEET = "ADD_TWEET";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
// export function addTweet(tweet) {
//   return {
//     type: ADD_TWEET,
//     tweet,
//   };
// }

export function submitQuestionAnswer({ qid, authedUser, answer }) {
  return {
    type: SUBMIT_QUESTION,
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
