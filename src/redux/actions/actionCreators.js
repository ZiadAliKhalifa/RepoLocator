import store from "../store";
import URLs from "../../consts/URLs";

export const fetch_repos = () => {
  return {
    type: "FETCH_REPOS"
  };
};
export const receive_repos = repos => {
  return {
    type: "FETCHED_REPOS",
    data: repos
  };
};
export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};

export const set_search_phrase = searchPhrase => {
  return {
    type: "SET_SEARCH_PHRASE",
    data: searchPhrase
  };
};

export const increment_page_counter = () => {
  return {
    type: "INCREMENT_PAGE_COUNTER"
  };
};

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
