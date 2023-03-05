export const RECEIVE_USERS = "RECEIVE_USERS";
export const SUBMIT_USER_ANSWER = "SUBMIT_USER_ANSWER";
export const SUBMIT_USER_NEW_QUESTION = "SUBMIT_USER_NEW_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
export function submitUserAnswer({ qid, authedUser, answer }) {
  return {
    type: SUBMIT_USER_ANSWER,
    qid,
    authedUser,
    answer,
  };
}

export function submitUserNewQuestion(info) {
  const question = info.question;
  return {
    type: SUBMIT_USER_NEW_QUESTION,
    author: question.author,
    qId: question.id,
  };
}
