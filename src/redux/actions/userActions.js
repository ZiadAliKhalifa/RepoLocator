import store from "../store";
import URLs from "../../consts/URLs";
import {
  fetch_user_repos,
  recieve_user_repos,
  fail_user_repos
} from "./actionCreators";

export const getUserRepos = (token, userPageNumber) => {
  store.dispatch(fetch_user_repos());
  return function(dispatch) {
    console.time("User Repos API call took: ");

    return fetch(`${URLs.GITHUB_USER_REPOS_URL}?page=${userPageNumber}`, {
      method: "get",
      headers: new Headers({
        Authorization: "Basic " + btoa(token),
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
          console.timeEnd("User Repos API call took: ");
        }
      })
      .catch(err => dispatch(fail_user_repos()));
  };
};
