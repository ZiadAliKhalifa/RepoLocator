import store from "../store";
import URLs from "../../consts/URLs";
import {
  fetch_user_repos,
  recieve_user_repos,
  fail_user_repos,
  increment_user_page_counter,
  decrement_user_page_counter,
  set_user_token
} from "./actionCreators";

export const setUserToken = token => {
  store.dispatch(set_user_token(token));
};

export const getUserRepos = token => {
  store.dispatch(fetch_user_repos());
  return function(dispatch, getState) {
    console.time("User Repos API call took: ");

    return fetch(`${URLs.GITHUB_USER_REPOS_URL}`, {
      method: "get",
      headers: new Headers({
        Authorization: "Basic " + token,
        "Content-Type": "application/json",
        accept: "application/json"
      })
    })
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No repositories for this user!");
        } else {
          dispatch(recieve_user_repos(data));
          console.timeEnd("User Repos API call took:  ");
        }
      })
      .catch(err => dispatch(fail_user_repos()));
  };
};

export const incrementUserPageCounter = () => {
  store.dispatch(increment_user_page_counter());
};

export const decrementUserPageCounter = () => {
  store.dispatch(decrement_user_page_counter());
};
