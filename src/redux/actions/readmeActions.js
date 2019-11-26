import store from "../store";
import URLs from "../../consts/URLs";
import {
  download_repository_readme,
  recieve_repository_readme,
  fail_readme_download
} from "./actionCreators";

//Implement load more data for a repository
export const loadRepositoryReadme = link => {
  store.dispatch(download_repository_readme());
  return function(dispatch, getState) {
    console.time("Readme download call took: ");

    return fetch(link)
      .then(data => data)
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No such readme");
        } else {
          dispatch(recieve_repository_readme());
          console.timeEnd("Readme download call took: ");
          return data;
        }
      })
      .catch(err => {
        dispatch(fail_readme_download());
      });
  };
};

//Implement load read.me for a repository
