import { RECEIVE_USERS, SUBMIT_USER_NEW_QUESTION } from "../actions/users";
import { SUBMIT_USER_ANSWER } from "../actions/users";
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SUBMIT_USER_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case SUBMIT_USER_NEW_QUESTION:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat([action.qId]),
        },
      };
    default:
      return state;
  }
}
