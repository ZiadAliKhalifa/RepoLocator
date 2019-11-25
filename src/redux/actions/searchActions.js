import store from "../store";
import URLs from "../../consts/URLs";
import {
  fetch_repos,
  receive_repos,
  receive_error,
  set_search_phrase,
  increment_page_counter,
  decrement_page_counter
} from "./actionCreators";

export const searchGitHubRepos = (repoName, pageNumber) => {
  store.dispatch(fetch_repos());
  return function(dispatch, getState) {
    console.time("API call took: ");

    return fetch(`${URLs.GITHUB_SEARCH_URL}?q=${repoName}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No repositories were found with this name");
        } else {
          dispatch(receive_repos(data));
          console.timeEnd("API call took: ");
        }
      })
      .catch(err => dispatch(receive_error()));
  };
};

export const setCentralSearchPhrase = searchPhrase => {
  store.dispatch(set_search_phrase(searchPhrase));
};

export const incrementPageCounter = () => {
  store.dispatch(increment_page_counter());
};

export const decrementPageCounter = () => {
  store.dispatch(decrement_page_counter());
};
