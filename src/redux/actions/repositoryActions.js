import store from "../store";
import URLs from "../../consts/URLs";
import {
  load_repository_info,
  recieve_repository_info,
  fail_repository_info
} from "./actionCreators";

export const loadRepositoryInfo = fullName => {
  store.dispatch(load_repository_info());
  return function(dispatch, getState) {
    console.time("Readme API call took: ");

    return fetch(`${URLs.GITHUB_REPO_URL}/${fullName}/readme`)
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No such repository");
        } else {
          dispatch(recieve_repository_info());
          console.timeEnd("Readme API call took: ");
          return data;
        }
      })
      .catch(err => dispatch(fail_repository_info()));
  };
};
