export const RECEIVE_USERS = "RECEIVE_USERS";
export const SUBMIT_USER_ANSWER = "SUBMIT_USER_ANSWER";

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
