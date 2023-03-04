import { saveQuestionAnswer, saveQuestion } from "../utils/api";
// import { showLoading, hideLoading } from "react-redux-loading-bar";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SUBMIT_QUESTION = "SUBMIT_QUESTION";
export const ADD_TWEET = "ADD_TWEET";

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
// export function handleAddTweet(text, replyingTo) {
//   return (dispatch, getState) => {
//     const { authedUser } = getState();
//     dispatch(showLoading());
//     return saveTweet({
//       text,
//       author: authedUser,
//       replyingTo,
//     })
//       .then((tweet) => dispatch(addTweet(tweet)))
//       .then(() => hideLoading());
//   };
// }
export function submitQuestionAnswer({ id, authedUser, answer }) {
  return {
    type: SUBMIT_QUESTION,
    id,
    authedUser,
    answer,
  };
}

export function handleSubmitQuestionAnswer(info) {
  return (dispatch) => {
    console.log(info);
    dispatch(submitQuestionAnswer(info));
  };
}
